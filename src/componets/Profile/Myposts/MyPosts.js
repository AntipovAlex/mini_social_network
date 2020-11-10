import React, {Component} from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElement = props.posts
        .map(p =>  <Post massenger={p.post} kol={p.likeCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ""
    }

    return (
        <div className={style.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}> Add posts</button>
                </div>
            </div>
            <div className={style.posts}>
                {postElement}
            </div>
            <div/>
        </div>

    );

}


export default MyPosts;