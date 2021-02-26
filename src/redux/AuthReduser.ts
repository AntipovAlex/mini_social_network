import {authApi, ResultCodeEnum, ResultCodeForCaptcha, securityApi, usersApi} from "../api/api";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {appReduserType} from "./reduxStore";

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

type actionType = setAuthUserDataType | getCaptchaUrlSuccessType

const authReduser = (state = initialiState, action: actionType) => {
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
type getCaptchaUrlSuccessType ={
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl: string}
}
type setAuthUserDataType = {
    type: typeof SET_USER_DATA
    payload: setAuthUserDataPayloadType
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataType => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});
export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessType => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
});

type thunkType = ThunkAction<Promise<void>, appReduserType, any, actionType>

export const getAuthUserData = (): thunkType =>
    async (dispatch) => {
        let data = await usersApi.getMe()
        if (data.resultCode === ResultCodeEnum.Success) {
            let {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }

    }

export const login = (email: string, password: string, rememberme: boolean, captcha: string): thunkType =>
    async (dispatch) => {
        const data = await authApi.login(email, password, rememberme, captcha)

        if (data.resultCode === ResultCodeEnum.Success) {
            dispatch(getAuthUserData());
        } else {
            if (data.resultCode === ResultCodeForCaptcha.Captcha) {
                dispatch(getCaptchaUrl())
            }
            let messages = data.messages.length > 0 ? data.messages[0] : "Some error";
            // @ts-ignore
            dispatch(stopSubmit("login", {_error: messages}))
        }

    }
export const logout = (): thunkType =>
    async (dispatch) => {
       const data = await authApi.logout()
        if (data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }


};

export const getCaptchaUrl = (): thunkType =>
    async (dispatch) => {
        const data = await securityApi.getCaptchaUrl();
        const captchaUrl = data.url;
        dispatch(getCaptchaUrlSuccess(captchaUrl));


    }

export default authReduser;