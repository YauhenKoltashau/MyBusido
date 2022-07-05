import {Content} from "./Content";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getUserByIdThunk, ProfileUserType} from "../../redux/contentReducer";
import React from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../withAuthRedirect";
import {compose} from "redux";

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



// let AuthRedirectComponent =withAuthRedirect(ProfileContainer)
const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        profile: state.contentPage.profile,

    }
}
// let WithUrlDataContainerComponent = withRouter(ProfileContainer);
// export default withAuthRedirect(connect (mapStateToProps,{getUserByIdThunk})(withRouter(ProfileContainer)))
export default compose<React.ComponentType>(connect (mapStateToProps,{getUserByIdThunk}),withRouter,withAuthRedirect)(ProfileContainer)
