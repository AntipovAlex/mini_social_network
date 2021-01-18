import React from "react";
import style from "./../Profile.module.css";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/formControls/FormControl";


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
    {error && <div className={style.formSumError}>
        {error}
    </div>}
        <div>
            <button > Save </button>
        </div>
        <div>
            <b>Full name :</b> <Field placeholder="Full Name" component={Input} name="fullName"/>
        </div>
        <div>
            <b>Looking for a job :</b> <Field placeholder="Looking for a job" component={Input} name="lookingForAJob" type="checkbox"/>
        </div>
        <div>
            <b>My professional skills :</b><Field placeholder="My professional skills" component={Textarea} name="lookingForAJobDescription"/>
        </div>
        <div>
            <b>About Me :</b> <Field placeholder="About Me" component={Textarea} name="aboutMe"/>
        </div>
            <div className={style.contacts} >
                <b>Contacts :</b> {Object.keys(profile.contacts).map(key => {
                return <div key={key} >
                    <b>{key} : {<Field placeholder={key} component={Input} name = {"contacts." + key}/>} </b>
                </div>
            })}
            </div>
    </form>
}
const ProfileDataFormReduxForm = reduxForm({form : "editProfile"})(ProfileDataForm)
export default ProfileDataFormReduxForm;