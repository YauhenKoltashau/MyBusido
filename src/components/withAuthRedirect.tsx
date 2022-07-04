import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type mapStateToPropsForRedirectType = {
    isAuth: boolean
}
const mapStateToPropsForRedirect = (state: AppStateType):mapStateToPropsForRedirectType => ({
    isAuth: state.auth.isAuth
})
export const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any> {
        render() {
            if(!this.props.isAuth) return <Redirect to={'/login'}/>
            return  <Component {...this.props}/>;
        }
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent

}