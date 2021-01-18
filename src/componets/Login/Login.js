import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/formControls/FormControl";
import {required} from "../../untils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/AuthReduser";
import {Redirect} from "react-router-dom";
import style from "./../common/formControls/FormControl.module.css";


const LoginForm = ({handleSubmit, error, captchaUrl}) =>{
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder="Email" component={Input} name="email"
                validate={[required]}/>
            </div>
            <div>
                <Field placeholder="Password" component={Input} name="password" type="password"
                validate={[required]}/>
            </div>
            <div>
                <Field type="checkbox" component={Input} name={"rememberMe"}/> remember me
            </div>
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl &&  <Field placeholder="Captcha" component={Input} name="captcha"
                                   validate={[required]}/>}
            {error && <div className={style.formSumError}>
                {error}
            </div>}

            <div>
                <button>Submit</button>
            </div>

        </form>
    )
}

const LoginRedaxForm = reduxForm({form : "login"})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if(props.isAuth){
        return <Redirect to={"/profile"}/>
    }

    return(
        <div>
            <h2> Login </h2>
            <LoginRedaxForm onSubmit = {onSubmit} captchaUrl ={props.captchaUrl}/>
        </div>

    )
}

const mapStateToProps = (state) => ({
    isAuth : state.auth.isAuth,
    captchaUrl : state.auth.captchaUrl
})

export default connect (mapStateToProps, {login}) (Login);