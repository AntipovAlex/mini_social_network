import {profileApi} from "../api/api";
import {stopSubmit} from "redux-form";
import {photosType, postType, profileType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {appReduserType} from "./reduxStore";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';



let initialState = {
    posts: [
        {id: 1, post: "Hi, I are you?", likeCount: "16"},
        {id: 2, post: "It`s my first post.", likeCount: "11"},
        {id: 3, post: "It`s very well.", likeCount: "21"},
        {id: 4, post: "Super.", likeCount: "6"},
    ] as Array<postType>,
    profile: null as profileType | null,
    status: "",
    newPostText: ""
};

export type initialStateType = typeof initialState

type  actionType = AddPostActionCreaterType | setUserProfileActionCreaterType | setStatusActionCreaterType |
    deletePostActionCreaterType | savePhotoSuccessActionCreaterType

const profileReduser = (state = initialState, action: actionType) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                post: action.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state;

    }
}

export type AddPostActionCreaterType = {
    type: typeof ADD_POST
    newPostText: string
}
export type setUserProfileActionCreaterType = {
    type: typeof SET_USER_PROFILE
    profile: profileType
}
export type setStatusActionCreaterType = {
    type: typeof SET_STATUS
    status: string
}
export type deletePostActionCreaterType = {
    type: typeof DELETE_POST
    postId: number
}
export type savePhotoSuccessActionCreaterType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: photosType
}

export const AddPostActionCreater = (newPostText: string): AddPostActionCreaterType => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile: profileType): setUserProfileActionCreaterType => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status: string): setStatusActionCreaterType => ({type: SET_STATUS, status});
export const deletePost = (postId: number):deletePostActionCreaterType => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos: photosType):savePhotoSuccessActionCreaterType => ({type: SAVE_PHOTO_SUCCESS, photos});

type thunkType = ThunkAction<Promise<void>, appReduserType, any, actionType>

export const getUserProfile = (userId: number): thunkType => async (dispatch) => {
        const  data = await profileApi.getProfileUser(userId)
                dispatch(setUserProfile(data));
};

export const getStatus = (userId: number): thunkType => async (dispatch) => {
        const data = await profileApi.getStatus(userId)
                dispatch(setStatus(data));

};

export const updateStatus = (status: string): thunkType => async (dispatch) => {
       const data = await profileApi.updateStatus(status)
                if (data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
};
export const savePhoto = (file: any): thunkType =>
    async (dispatch) => {
        const data = await profileApi.savePhoto(file)
        if (data.resultCode === 0) {
            dispatch(savePhotoSuccess(data.data.photos));
        }

    };
export const saveProfile = (profile: profileType): thunkType =>
    async (dispatch, getState) => {
        const userId = getState().auth.userId;
        const data = await profileApi.saveProfile(profile)

        if (data.resultCode === 0) {
            // @ts-ignore
            dispatch(getUserProfile(userId));
        } else {
            let key = data.messages[0].match(/Contacts->(\w+)/)[1].toLowerCase();
            // @ts-ignore
            dispatch(stopSubmit('editProfile', {
                contacts: {[key]: data.messages[0]},
            }));
            return Promise.reject(data.messages[0])

        }
    }


export default profileReduser;
