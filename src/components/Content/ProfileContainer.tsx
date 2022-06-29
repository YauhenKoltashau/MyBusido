import {Content} from "./Content";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import { ProfileUserType, setUserProfile} from "../../redux/contentReducer";
import React from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getUserById} from "../../api/api";

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
        getUserById(userId).then(data =>

            {
                this.props.setUserProfile(data)

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