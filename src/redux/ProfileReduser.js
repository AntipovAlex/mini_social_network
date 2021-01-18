import {profileApi} from "../api/api";
import {stopSubmit} from "redux-form";

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
    ],
    profile: null,
    status: ""
};

const profileReduser = (state = initialState, action) => {
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

export const AddPostActionCreater = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileApi.getProfileUser(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
};

export const getStatus = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data));
            })
    }
};

export const updateStatus = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            })
    }
};
export const savePhoto = (file) => {
    return (dispatch) => {
        profileApi.savePhoto(file)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(savePhotoSuccess(data.data.photos));
                }
            })
    }
};
export const saveProfile = (profile) =>
    async (dispatch, getState) => {
        const userId = getState().auth.userId;
        const data = await profileApi.saveProfile(profile)

        if (data.resultCode === 0) {
            dispatch(getUserProfile(userId));
        } else {
            debugger
            dispatch(stopSubmit("editProfile", {_error: data.messages[0]}));
            return Promise.reject(data.messages[0])

        }
    }


export default profileReduser;