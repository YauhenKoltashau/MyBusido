import {Content} from "./Content";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import { ProfileUserType, setIsFetching, setUserProfile} from "../../redux/contentReducer";
import React from "react";
import axios from "axios";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string,
}
type ComponentWithRouterPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType
type mapStateToPropsType = {
    profile: ProfileUserType
}
type mapDispatchToPropsType = {
    setUserProfile:(profile: ProfileUserType)=> void

}
export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<ComponentWithRouterPropsType>{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId='2'
        }
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/'+userId).then(response =>
            {
                this.props.setUserProfile(response.data)

            }
        )
    }

    render() {
        return (
            <Content {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToPropsType = (state: AppStateType):mapStateToPropsType => {
    return {
        profile: state.contentPage.profile
    }
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect (mapStateToPropsType,{setUserProfile})(WithUrlDataContainerComponent)