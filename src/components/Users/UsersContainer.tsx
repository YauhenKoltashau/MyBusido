import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followUserThunk, getUsers,
    setCurrentPage,
    setUsersOnPage,
    unFollowUserThunk,
    UsersType
} from "../../redux/usersReducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../Preloader/preloader";
import {withAuthRedirect} from "../withAuthRedirect";
import {compose} from "redux";


type mapStateToPropsType = {
    usersState: UsersType
    totalCount: number
    currentPageNumber: number
    usersOnPage: number
    isFetching: boolean
    isFollowingInProgress: number[]
}
type mapDispatchToPropsType = {
    setCurrentPage: (pageNumber: number) => void
    setUsersOnPage: (usersOn: number) => void
    getUsers:(currentPageNumber: number,usersOnPage: number) => void
    followUserThunk:(userId: number) => void
    unFollowUserThunk:(userId: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
       this.props.getUsers(this.props.currentPageNumber, this.props.usersOnPage)
    }

    onClickPageChosen = (pageNumber: number) => {
        this.props.getUsers(pageNumber,this.props.usersOnPage)
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return (<>
                {this.props.isFetching
                    ? <Preloader/> : null}
                <Users usersState={this.props.usersState}
                       totalCount={this.props.totalCount}
                       usersOnPage={this.props.usersOnPage}
                       currentPageNumber={this.props.currentPageNumber}
                       onClickPageChosen={this.onClickPageChosen}
                       isFollowingInProgress={this.props.isFollowingInProgress}
                       followUserThunk={this.props.followUserThunk}
                       unFollowUserThunk={this.props.unFollowUserThunk}
                />
            </>

        )

    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersState: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        currentPageNumber: state.usersPage.currentPageNumber,
        usersOnPage: state.usersPage.usersOnPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress

    }
}
// let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         followUser: (id: number) => {
//             dispatch(FollowAC(id))
//
//         },
//         unFollowUser: (id: number) => {
//             dispatch(UnfollowAC(id))
//         },
//         setUsers: (users: UsersType) => {
//             dispatch(SetUsersAC(users))
//         },
//         setTotalUsers: (totalUsers: number) => {
//             dispatch(SetTotalUsersAC(totalUsers))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(SetCurrentPageAC(pageNumber))
//         },
//         setUsersOnPage: (usersOn: number) => {
//             dispatch((SetUsersOnPageAC(usersOn)))
//         },
//         setIsFetching: (isFetching: boolean) => {
//             dispatch(SetIsFetchingAC(isFetching))
//         }
//     }
// }

// let AuthRedirectComponent = withAuthRedirect(UsersContainer)
// export default connect(mapStateToProps, {
//     setCurrentPage,
//     setUsersOnPage,
//     getUsers,
//     followUserThunk,
//     unFollowUserThunk
// })(AuthRedirectComponent)
export default compose<React.ComponentType>(connect(mapStateToProps, {
    setCurrentPage,
    setUsersOnPage,
    getUsers,
    followUserThunk,
    unFollowUserThunk
}),withAuthRedirect)(UsersContainer)