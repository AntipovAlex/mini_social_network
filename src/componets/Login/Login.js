import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/formControls/FormControl";
import {required} from "../../untils/validators/validators";


const LoginForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Login" component={Input} name={"login"}
                validate={[required]}/>
            </div>
            <div>
                <Field placeholder="Password" component={Input} name={"password"}
                validate={[required]}/>
            </div>
            <div>
                <Field type="checkbox" component={Input} name={"rememberMe"}/> remember me
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

const LoginRedaxForm = reduxForm({form : "login"})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) =>{
        console.log(formData)
    }

    return(
        <div>
            <h2> Login </h2>
            <LoginRedaxForm onSubmit = {onSubmit}/>
        </div>

    )
}

export default Login;