import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/formControls/FormControl";
import {required} from "../../untils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/AuthReduser";
import {Redirect} from "react-router-dom";
import style from "./../common/formControls/FormControl.module.css";
import {appReduserType} from "../../redux/reduxStore";

type loginFormOwenProps ={
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<loginFormValuesType, loginFormOwenProps> & loginFormOwenProps> = ({handleSubmit, error, captchaUrl}) =>{
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

const LoginRedaxForm = reduxForm<loginFormValuesType, loginFormOwenProps>({form : "login"})(LoginForm)

type mapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string | null
}
type mapDispatchToProps = {
    login : (email: string, password: string, rememberme: boolean, captcha: string) => void
}
type loginFormValuesType = {
    captcha: string
    rememberMe: boolean
    password: string
    email: string
}

const Login: React.FC<mapStateToPropsType & mapDispatchToProps> = (props) => {
    const onSubmit = (formData: loginFormValuesType) =>{
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

const mapStateToProps = (state: appReduserType): mapStateToPropsType => ({
    isAuth : state.auth.isAuth,
    captchaUrl : state.auth.captchaUrl
})

export default connect (mapStateToProps, {login}) (Login);
