import React from 'react';
import {AddPostActionCreater} from "../../../redux/ProfileReduser";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


/*const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(AddPostActionCreater());
                }

                let updateNewPost = (text) => {
                    store.dispatch(UpdeateNewPostTextActionCreater(text));
                }
                return <MyPosts addPost={addPost} updateNewPost={updateNewPost}
                                posts={state.profilePage.posts}
                                newPostChange={state.profilePage.newPostChange}/>
            }}
        </StoreContext.Consumer>
    );
}*/

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostChange: state.profilePage.newPostChange
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(AddPostActionCreater(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;