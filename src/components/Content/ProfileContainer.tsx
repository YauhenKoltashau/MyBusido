import {Content} from "./Content";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getUserByIdThunk, ProfileUserType} from "../../redux/contentReducer";
import React from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string,
}
type ComponentWithRouterPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType
type mapStateToPropsType = {
    profile: ProfileUserType
}
type mapDispatchToPropsType = {
    getUserByIdThunk:(id: number)=> void

}
export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<ComponentWithRouterPropsType>{
    componentDidMount() {
        let newUserId = this.props.match.params.userId
        let userId = + newUserId
        if (!userId) {
            userId=24371
        }
        this.props.getUserByIdThunk(userId)
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
export default connect (mapStateToPropsType,{getUserByIdThunk})(WithUrlDataContainerComponent)