import {usersApi} from "../api/api";
import {usersType} from "../types/types";

const FOLLOWED = "FOLLOVED";
const UNFOLLOWED = "UNFOLLOVED";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGEL_IS_FETCHING = "TOGGEL_IS_FETCHING";
const TOGGLE_IS_FOLLOW_PROGRESS = "TOGGLE_IS_FOLLOW_PROGRESS";


let initialiState = {
    users: [] as Array<usersType>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followInProgress: [] as Array<number>
}

type initialiStateType = typeof initialiState


const usersReduser = (state = initialiState, action: any) => {
    switch (action.type) {
        case FOLLOWED: {
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
        UNFOLLOWED: {
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
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGEL_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOW_PROGRESS: {
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

type followeSuccessActionType = {
    type: typeof FOLLOWED
    userId: number
}
type unfolloweSuccessActionType = {
    type: typeof UNFOLLOWED
    userId: number
}
type setUsersActionType = {
    type: typeof SET_USERS
    users: Array<usersType>
}
type setCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
type setTotalUsersCountActionType = {
    type: typeof SET_TOTAL_COUNT
    count: number
}
type toggelIsFetchingActionType = {
    type: typeof TOGGEL_IS_FETCHING
    isFetching: boolean
}
type toggleFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOW_PROGRESS
    isFetching: boolean
    userId: number
}

export const followeSuccess = (userId: number): followeSuccessActionType => ({type: FOLLOWED, userId})
export const unfolloweSuccess = (userId: number): unfolloweSuccessActionType => ({type: UNFOLLOWED, userId})
export const setUsers = (users: Array<usersType>): setUsersActionType => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number): setCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (count: number): setTotalUsersCountActionType => ({type: SET_TOTAL_COUNT, count})
export const toggelIsFetching = (isFetching: boolean): toggelIsFetchingActionType => ({type: TOGGEL_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching: boolean, userId: number): toggleFollowingProgressActionType => ({type: TOGGLE_IS_FOLLOW_PROGRESS, isFetching, userId})

export default usersReduser;

export const getUsersThunkCreater =(page: number, pageSize: number) => async (dispatch: any) => {
        dispatch(toggelIsFetching(true))
       dispatch(setCurrentPage(page))
        const data = await usersApi.getUsers(page, pageSize)

                dispatch(toggelIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));

}
export const follow = (userId: number) => async (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId))
        const data = await usersApi.follow(userId)
                if (data.resultCode === 0) {
                    dispatch(followeSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))

}

export const unfollow = (userId: number) => async (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId))
        const data = await usersApi.unFollow(userId)
                if (data.resultCode === 0) {
                    dispatch(unfolloweSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))

}
