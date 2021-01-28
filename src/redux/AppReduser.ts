import {getAuthUserData} from "./AuthReduser";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type initialiStateType = {
    initialized: boolean
};

let initialiState: initialiStateType = {
    initialized: false
};

const appReduser = (state = initialiState, action: any): initialiStateType => {
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

export type initializedSuccessActionType ={
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = (): initializedSuccessActionType => ({type: INITIALIZED_SUCCESS});

export const initializedApp = () => (dispatch: any) => {
       let promise =  dispatch(getAuthUserData());
        Promise.all([promise])
            .then(() => {
            dispatch(initializedSuccess());
    })
};

export default appReduser;