import {getAuthUserData} from "./AuthReduser";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialiState = {
    initialized: false
};

const appReduser = (state = initialiState, action) => {
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
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializedApp = () => (dispatch) => {
       let promise =  dispatch(getAuthUserData());
        Promise.all([promise])
            .then(() => {
            dispatch(initializedSuccess());
    })
};

export default appReduser;