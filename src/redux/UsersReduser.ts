import {ResultCodeEnum, usersApi} from "../api/api";
import {usersType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {appReduserType, inferActionsTypes} from "./reduxStore";

let initialiState = {
    users: [] as Array<usersType>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followInProgress: [] as Array<number>
}

type initialiStateType = typeof initialiState

type actionType = inferActionsTypes<typeof actions>


const usersReduser = (state = initialiState, action: actionType) => {
    switch (action.type) {
        case "FOLLOWED": {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case
        "UNFOLLOWED": {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case "SET_USERS": {
            return {...state, users: [...action.users]}
        }
        case "SET_CURRENT_PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET_TOTAL_COUNT": {
            return {...state, totalUsersCount: action.count}
        }
        case "TOGGEL_IS_FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "TOGGLE_IS_FOLLOW_PROGRESS": {
            return {
                ...state,
                followInProgress: action.isFetching
                    ? [...state.followInProgress, action.userId]
                    : state.followInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state

    }
}

export const actions = {
    followeSuccess: (userId: number) => ({type: 'FOLLOWED', userId} as const),
    unfolloweSuccess: (userId: number) => ({type: 'UNFOLLOWED', userId} as const),
    setUsers: (users: Array<usersType>) => ({type: 'SET_USERS', users} as const),
    setCurrentPage: (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const),
    setTotalUsersCount: (count: number) => ({type: 'SET_TOTAL_COUNT', count} as const),
    toggelIsFetching: (isFetching: boolean) => ({
        type: 'TOGGEL_IS_FETCHING',
        isFetching
    } as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: 'TOGGLE_IS_FOLLOW_PROGRESS',
        isFetching,
        userId
    } as const)
}


type thunkType = ThunkAction<Promise<void>, appReduserType, any, actionType>
export default usersReduser;

export const getUsersThunkCreater =
    (page: number, pageSize: number): thunkType =>
        async (dispatch) => {
            dispatch(actions.toggelIsFetching(true))
            dispatch(actions.setCurrentPage(page))
            const data: any = await usersApi.getUsers(page, pageSize)

            dispatch(actions.toggelIsFetching(false));
            dispatch(actions.setUsers(data.items));
            dispatch(actions.setTotalUsersCount(data.totalCount));

        }
export const follow = (userId: number): thunkType => async (dispatch) => {
    dispatch(actions.toggleFollowingProgress(true, userId))
    const data = await usersApi.follow(userId)
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(actions.followeSuccess(userId))
    }
    dispatch(actions.toggleFollowingProgress(false, userId))

}

export const unfollow = (userId: number): thunkType => async (dispatch) => {
    dispatch(actions.toggleFollowingProgress(true, userId))
    const data = await usersApi.unFollow(userId)
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(actions.unfolloweSuccess(userId))
    }
    dispatch(actions.toggleFollowingProgress(false, userId))

}
