import {authApi, securityApi, usersApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET-CAPTCHA-URL-SUCCESS';

export type initialiStateType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
    captchaUrl: null | string
};

let initialiState: initialiStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReduser = (state = initialiState, action: any) => {
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

type setAuthUserDataPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type setAuthUserDataType = {
    type: typeof SET_USER_DATA
    payload: setAuthUserDataPayloadType
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataType => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

export  type getCaptchaUrlSuccessType ={
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl: string}
}

export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessType => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
});

export const getAuthUserData = () =>
    async (dispatch: any) => {
        let data = await usersApi.getMe()
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }

    }

export const login = (email: string, password: string, rememberme: boolean, captcha: string) =>
    async (dispatch: any) => {
        const data = await authApi.login(email, password, rememberme, captcha)

        if (data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            if (data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
            const messages = data.messages.length > 0 ? data.messages[0] : "Some error";
            dispatch(stopSubmit("login", {_error: messages}))
        }

    }
export const logout = () =>
    async (dispatch: any) => {
       const data = await authApi.logout()
        if (data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }


};

export const getCaptchaUrl = () =>
    async (dispatch: any) => {
        const data = await securityApi.getCaptchaUrl();
        const captchaUrl = data.url;
        dispatch(getCaptchaUrlSuccess(captchaUrl));


    }

export default authReduser;