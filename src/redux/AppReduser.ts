import {getAuthUserData} from "./AuthReduser";
import {ThunkAction} from "redux-thunk";
import {appReduserType} from "./reduxStore";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type initialiStateType = {
    initialized: boolean
};

let initialiState: initialiStateType = {
    initialized: false
};

type actionType = initializedSuccessActionType

const appReduser = (state = initialiState, action: actionType): initialiStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}
type thunkType = ThunkAction<Promise<void>, appReduserType, any, actionType>

export type initializedSuccessActionType ={
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = (): initializedSuccessActionType => ({type: INITIALIZED_SUCCESS});

export const initializedApp = (): thunkType => async (dispatch) => {
       let promise = await dispatch(getAuthUserData());
        Promise.all([promise])
            .then(() => {
            dispatch(initializedSuccess());
    })
};

export default appReduser;