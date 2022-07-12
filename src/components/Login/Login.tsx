import React from 'react'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {logInThunk} from "../../redux/Auth-reducer";
import {AppStateType} from "../../redux/redux-store";


type LoginFormProps = any
const LoginForm = (props: LoginFormProps) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type="checkbox"/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props: LoginPropsType) => {
    console.log(props.isLogged)
    const onSubmit = (formData: any) => {
        props.logInThunk(formData.login, formData.password, formData.rememberMe)
        console.log(formData)
    }

    return (
        <>{!props.isLogged
            ?<div>
                <h1>LOGIN</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
            :<div>Logged</div>
        }

        </>


    )
}


export type LoginPropsType = mapStateToPropsType & mapDispatchToPropsType
type mapDispatchToPropsType = {
    logInThunk: (login: string, password: string, rememberMe: boolean) => void
}
type mapStateToPropsType = {
    isLogged: boolean
}

const mapStateToProps = (state: AppStateType):mapStateToPropsType => ({
    isLogged:state.auth.isLogged
})

// export default  connect (mapStateToProps, {loginThunk})(Login)
export default connect (mapStateToProps, {logInThunk})(Login)