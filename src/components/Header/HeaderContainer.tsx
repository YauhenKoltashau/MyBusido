import React from "react";
import './Header.module.css';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData,} from "../../redux/Auth-reducer";
import {AppStateType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<HeaderPropsType>{
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',
            {withCredentials: true})
            .then(response => {
                if(response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setAuthUserData(id, login, email)
                }
            }
        )
    }

    render () {
        return(
            <Header {...this.props}/>
        )

    }
}
type mapStateToPropsType = {
    isAuth: boolean
    login: string | null

}
type mapDispatchToPropsType = {
    setAuthUserData: (id: number, login: string, email: string)=>void
}
export type HeaderPropsType = mapStateToPropsType & mapDispatchToPropsType
const mapStateToProps = (state: AppStateType):mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect (mapStateToProps,{setAuthUserData}) (HeaderContainer)