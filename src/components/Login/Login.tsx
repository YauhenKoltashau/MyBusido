import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {logInThunk} from "../../redux/Auth-reducer";
import {createField, Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import styles from "../common/FormControls/FormControl.module.css"


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
const LoginForm:React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return(
        <form onSubmit={handleSubmit}>
            {createField("Login", "login", [required], Input)}
            {createField("Password", "password", [required], Input,{type: "password"})}
            {createField(undefined, "rememberMe", [], Input, {type: "checkbox"})}
            {error&&<div className={styles.error}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.logInThunk(formData.login, formData.password, formData.rememberMe)
    }
    if (props.isAuth){
        return <Redirect to={'/profile'}/>
    }

    return (
        <>
            <div>
                <h1>LOGIN</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </>


    )
}


export type LoginPropsType = mapStateToPropsType & mapDispatchToPropsType
type mapDispatchToPropsType = {
    logInThunk: (login: string, password: string, rememberMe: boolean) => void
}
type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType):mapStateToPropsType => ({
    isAuth:state.auth.isAuth
})

// export default  connect (mapStateToProps, {loginThunk})(Login)
export default connect (mapStateToProps, {logInThunk})(Login)