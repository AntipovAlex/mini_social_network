import {profileApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

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
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost);
            stateCopy.newPostChange = "";
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;

    }
}

export const AddPostActionCreater = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

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
                if(data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            })
    }
};

export default profileReduser;