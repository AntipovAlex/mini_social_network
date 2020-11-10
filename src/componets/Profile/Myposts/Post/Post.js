import React, {Component} from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.item}>
            <img
                src='https://media.istockphoto.com/photos/illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-picture-id1226886130'/>
            {props.massenger}
            <div>
                <span> Like {props.kol} </span>
            </div>
        </div>
    );
}


export default Post;