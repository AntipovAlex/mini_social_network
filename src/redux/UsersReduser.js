const FOLLOWED = "FOLLOVED";
const UNFOLLOWED = "UNFOLLOVED";
const SET_USERS = "SET-USERS";

let initialiState = {
    users: [  ]
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
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state

    }
}
export const followerActionCreater = (userId) => ({type: FOLLOWED, userId})
export const unfollowerActionCreater = (userId) => ({type: UNFOLLOWED, userId})
export const setUsersActionCreater = (users) => ({type: SET_USERS, users})

export default usersReduser;