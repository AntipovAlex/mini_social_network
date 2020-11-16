const UPDEATE_NEW_POST_TEXT = 'UPDEATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const profileReduser = (state, action) => {
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