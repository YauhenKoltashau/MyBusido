import React, {ComponentType} from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type mapStateToPropsForRedirectType = {
    isAuth: boolean
}
const mapStateToPropsForRedirect = (state: AppStateType):mapStateToPropsForRedirectType => ({
    isAuth: state.auth.isAuth
})
export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent =(props:mapStateToPropsForRedirectType) =>  {
        let {isAuth, ...restProps} = props
        if(!isAuth) return <Redirect to={'/login'}/>
        return  <Component {...restProps as T}/>;

    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent

}