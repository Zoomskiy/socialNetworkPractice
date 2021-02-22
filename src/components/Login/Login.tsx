import React from "react";
import  {InjectedFormProps, reduxForm} from "redux-form";
import {Field} from "redux-form";
import { Input } from "../../common/FormsControl/FormsControl";
import {requiredField} from "../../utils/validator/validators";



type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
export const LoginForm: React.FC <InjectedFormProps<FormDataType>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Input} validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[requiredField]}/>
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
export const Login = () => {
    const onSubmit = () => {

    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}