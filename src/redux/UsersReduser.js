import {whenMapDispatchToPropsIsObject} from "react-redux/lib/connect/mapDispatchToProps";
import {usersApi} from "../api/api";

const FOLLOWED = "FOLLOVED";
const UNFOLLOWED = "UNFOLLOVED";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGEL_IS_FETCHING = "TOGGEL_IS_FETCHING";
const TOGGLE_IS_FOLLOW_PROGRESS = "TOGGLE_IS_FOLLOW_PROGRESS";


let initialiState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followInProgress: []
}


const usersReduser = (state = initialiState, action) => {
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
export const followeSuccess = (userId) => ({type: FOLLOWED, userId})
export const unfolloweSuccess = (userId) => ({type: UNFOLLOWED, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_COUNT, count})
export const toggelIsFetching = (isFetching) => ({type: TOGGEL_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOW_PROGRESS, isFetching, userId})

export default usersReduser;

export const getUsersThunkCreater =(page, pageSize) => {
   return (dispatch) => {
        dispatch(toggelIsFetching(true))
       dispatch(setCurrentPage(page))
        usersApi.getUsers(page, pageSize)
            .then(data => {
                dispatch(toggelIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            })
    }
}
export const follow = (userid) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userid))
        usersApi.follow(userid)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followeSuccess(userid))
                }
                dispatch(toggleFollowingProgress(false, userid))
            })
    }
}

export const unfollow = (userid) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userid))
        usersApi.unFollow(userid)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfolloweSuccess(userid))
                }
                dispatch(toggleFollowingProgress(false, userid))
            })
    }
}
