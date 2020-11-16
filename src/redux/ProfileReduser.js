const UPDEATE_NEW_POST_TEXT = 'UPDEATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        {id: 1, post: "Hi, I are you?", likeCount: "16"},
        {id: 2, post: "It`s my first post.", likeCount: "11"},
        {id: 3, post: "It`s very well.", likeCount: "21"},
        {id: 4, post: "Super.", likeCount: "6"},
    ],
    newPostChange: "Hi, hi my freinds"
};

const profileReduser = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostChange,
                likeCount: 0
            }
            state.posts.push(newPost);
            state.newPostChange = "";
            return state;
        case UPDEATE_NEW_POST_TEXT:
            state.newPostChange = action.newText;
            return state;
        default:
            return state;
    }
}

export const AddPostActionCreater = () => ({type: ADD_POST});
export const UpdeateNewPostTextActionCreater = (text) => ({type: UPDEATE_NEW_POST_TEXT, newText: text});

export default profileReduser;