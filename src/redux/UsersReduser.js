const FOLLOWED = "FOLLOVED";
const UNFOLLOWED = "UNFOLLOVED";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";


let initialiState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1
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
        case SET_USERS:{
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        default:
            return state

    }
}
export const followerActionCreater = (userId) => ({type: FOLLOWED, userId})
export const unfollowerActionCreater = (userId) => ({type: UNFOLLOWED, userId})
export const setUsersActionCreater = (users) => ({type: SET_USERS, users})
export const setCurrentPageActionCreater = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountActionCreater = (count) => ({type: SET_TOTAL_COUNT, count})

export default usersReduser;