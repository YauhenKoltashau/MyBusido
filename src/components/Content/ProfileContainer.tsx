import {Content} from "./Content";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {ContentPageType, ProfileUserType, setIsFetching, setUserProfile} from "../../redux/contentReducer";
import React from "react";
import axios from "axios";

type mapStateToPropsType = {
    state: ContentPageType
}
type mapDispatchToPropsType = {
    setUserProfile:(profile: ProfileUserType)=> void
    setIsFetching:(isFetching:boolean)=>void

}
export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType>{
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(response =>
            {
                console.log(response.data)
                this.props.setIsFetching(false)
                this.props.setUserProfile(response.data)

            }
        )
    }

    render() {
        return (
            <Content {...this.props} state={this.props.state}/>
        )
    }
}

const mapStateToPropsType = (state: AppStateType):mapStateToPropsType => {
    return {
        state: state.contentPage
    }
}

export default connect (mapStateToPropsType,{setUserProfile, setIsFetching})(ProfileContainer)