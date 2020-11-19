import React from 'react';
import {AddPostActionCreater, UpdeateNewPostTextActionCreater} from "../../../redux/ProfileReduser";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";
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
        addPost: () => {
            dispatch(AddPostActionCreater())
        },
        updateNewPost: (text) => {
            dispatch(UpdeateNewPostTextActionCreater(text));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;