import {authApi, usersApi} from "../api/api";
import {stopSubmit} from "redux-form";

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
                ...action.payload,
            }
        default:
            return state;
    }
}
export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});
export const getAuthUserData = () => {
    return (dispatch) => {
        return usersApi.getMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            })
    }
};

export const login = (email, password, rememberme) => {
    return (dispatch) => {
        authApi.login(email, password, rememberme)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getAuthUserData());
                } else {
                    let messages = data.messages.length > 0 ? data.messages[0] : "Some error";
                    dispatch(stopSubmit( "login", {_error : messages}))
                }
            })
    }
};

export const logout = () => {
    return (dispatch) => {
        authApi.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            })
    }
};
export default authReduser;