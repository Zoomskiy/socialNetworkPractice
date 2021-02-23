import React from "react";
import  {InjectedFormProps, reduxForm} from "redux-form";
import {Field} from "redux-form";
import { Input } from "../../common/FormsControl/FormsControl";
import {requiredField} from "../../utils/validator/validators";
import {connect} from "react-redux";
import {login} from "../../redux/AuthReducer";
import { Redirect } from "react-router-dom";
import {rootReducer} from "../../redux/redux-store";



type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
export const LoginForm: React.FC <InjectedFormProps<FormDataType>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type="password" component={Input} validate={[requiredField]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input} validate={[requiredField]}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: "login"
})(LoginForm)

 const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth){
        return <Redirect to={"/Profile"}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state: rootReducer) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)