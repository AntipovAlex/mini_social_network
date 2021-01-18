import {authApi, securityApi, usersApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET-CAPTCHA-URL-SUCCESS';


let initialiState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReduser = (state = initialiState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}
export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
});

export const getAuthUserData = () =>
    async (dispatch) => {
        let data = await usersApi.getMe()
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }

    }

export const login = (email, password, rememberme,captcha) =>
    async (dispatch) => {
        const data = await authApi.login(email, password, rememberme,captcha)

        if (data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            if(data.resultCode === 10){
               dispatch(getCaptchaUrl())
            }
            const messages = data.messages.length > 0 ? data.messages[0] : "Some error";
            dispatch(stopSubmit("login", {_error: messages}))
        }

    }


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

export const getCaptchaUrl = () =>
    async (dispatch) => {
        const data = await securityApi.getCaptchaUrl();
        const captchaUrl = data.url;
        dispatch(getCaptchaUrlSuccess(captchaUrl));



    }

export default authReduser;