import {Content} from "./Content";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {
    getUserByIdThunk,
    ProfileUserType,
    getUserStatusThunk,
    updateStatusThunk,
    saveFotoThunk
} from "../../redux/contentReducer";
import React from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {UserPhotoType} from "../../api/api";

type PathParamsType = {
    userId: string,
}
type ComponentWithRouterPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType
type mapStateToPropsType = {
    profile: ProfileUserType
    status: string
    id: any
}
type mapDispatchToPropsType = {
    getUserByIdThunk: (id: number) => void
    getUserStatusThunk: (id: number) => void
    updateStatusThunk: (status: string) => void
    saveFotoThunk: (file: UserPhotoType) => void

}
export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<ComponentWithRouterPropsType> {
    refreshProfile() {
        let newUserId = this.props.match.params.userId
        let userId: number = +newUserId
        if (!userId) {
            userId = this.props.id
            if (!userId) {
                this.props.history.push('/login')
            }
        }

        this.props.getUserByIdThunk(userId)
        this.props.getUserStatusThunk(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ComponentWithRouterPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }

    }


    render() {
        return (
            <Content {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatusThunk={this.props.updateStatusThunk}
                     isOwner={!this.props.match.params.userId}
                     saveFoto={this.props.saveFotoThunk}

            />
        )
    }
}


// let AuthRedirectComponent =withAuthRedirect(ProfileContainer)
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.contentPage.profile,
        status: state.contentPage.currentStatus,
        id: state.auth.id
    }
}
// let WithUrlDataContainerComponent = withRouter(ProfileContainer);
// export default withAuthRedirect(connect (mapStateToProps,{getUserByIdThunk})(withRouter(ProfileContainer)))
export default compose<React.ComponentType>(connect(mapStateToProps, {
    getUserByIdThunk,
    getUserStatusThunk,
    updateStatusThunk,
    saveFotoThunk
}), withRouter, withAuthRedirect)(ProfileContainer)
