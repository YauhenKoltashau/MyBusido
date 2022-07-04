import React from "react";
import './Header.module.css';
import {Header} from "./Header";
import {connect} from "react-redux";
import {setAuthUserThunk,} from "../../redux/Auth-reducer";
import {AppStateType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<HeaderPropsType>{
    componentDidMount() {
        this.props.setAuthUserThunk()

    }

    render () {
        return(
            <Header {...this.props} />


        )

    }
}
type mapStateToPropsType = {
    isAuth: boolean
    login: string | null

}
type mapDispatchToPropsType = {
    setAuthUserThunk: ()=>void
}
export type HeaderPropsType = mapStateToPropsType & mapDispatchToPropsType
const mapStateToProps = (state: AppStateType):mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect (mapStateToProps,{setAuthUserThunk}) (HeaderContainer)