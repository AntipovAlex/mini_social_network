import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElement =
        props.posts.map(p => <Post massenger={p.post} kol={p.likeCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPost(text);
    }

    return (
        <div className={style.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostChange}/>
                </div>
                <div>
                    <button onClick={onAddPost}> Add posts </button>
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