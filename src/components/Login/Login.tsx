import React from 'react'
import { InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {getCaptchaUrlThunk, logInThunk} from "../../redux/Auth-reducer";
import {createField, Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import styles from "../common/FormControls/FormControl.module.css"
import {Captcha} from "../Captcha/Captcha";


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
    captcha: string
}
const LoginForm:React.FC<InjectedFormProps<FormDataType, IProps> & IProps> = ({handleSubmit, error, captchaUrl, ...props}) => {
    return(
        <form onSubmit={handleSubmit}>
            {createField("Login", "login", [required], Input)}
            {createField("Password", "password", [required], Input,{type: "password"})}
            {createField(undefined, "rememberMe", [], Input, {type: "checkbox"})}
            {captchaUrl && <Captcha url={captchaUrl} refreshImage={props.refreshImage}/>}
            {captchaUrl && createField("Symbols from image", "captcha", [required], Input)}
            {error&&<div className={styles.error}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
interface IProps {
    captchaUrl: string | null;
    refreshImage:() => void
}
export const LoginReduxForm = reduxForm<FormDataType, IProps>({form: 'login'})(LoginForm)
const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.logInThunk(formData.login, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    const refreshImage = () => {
        props.getCaptchaUrlThunk()
    }

    return (
        <>
            <div>
                <h1>LOGIN</h1>
                <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} refreshImage={refreshImage}/>
            </div>
        </>


    )
}


export type LoginPropsType = mapStateToPropsType & mapDispatchToPropsType
type mapDispatchToPropsType = {
    logInThunk: (login: string, password: string, rememberMe: boolean, captcha: string) => void
    getCaptchaUrlThunk: () => void

}
type mapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

const mapStateToProps = (state: AppStateType):mapStateToPropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth:state.auth.isAuth
})

// export default  connect (mapStateToProps, {loginThunk})(Login)
export default connect (mapStateToProps, {logInThunk, getCaptchaUrlThunk})(Login)