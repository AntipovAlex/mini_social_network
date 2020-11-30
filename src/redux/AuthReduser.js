import {usersApi} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';


let initialiState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReduser = (state = initialiState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const getAuthUserData = () => {
    return (dispatch) => {
        usersApi.getMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            })
    }
};

export default authReduser;