import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLenghtCreator, required} from "../../../untils/validators/validators";
import {Textarea} from "../../common/formControls/FormControl";

const MyPosts = React.memo(props => {
    let postElement =
        props.posts.map(p => <Post massenger={p.post} kol={p.likeCount}/>)


    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }


    return (
        <div className={style.postBlock}>
            <h3>My post</h3>
            <div>
                <AddPostMassengerFormRedux onSubmit = {onAddPost}/>
            </div>
            <div className={style.posts}>
                {postElement}
            </div>
            <div/>
        </div>

    )
});
const maxLengtSymbols = maxLenghtCreator(15)

const AddPostMassenger = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={"newPostText"}
                   validate={[required , maxLengtSymbols]}
                   placeholder={"Post messager"}/>
            <div>
                <button> Add posts</button>
            </div>
        </form>
    )
}

const AddPostMassengerFormRedux = reduxForm({form: "addPostMassenger"})(AddPostMassenger)

export default MyPosts;