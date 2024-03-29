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
import {Preloader} from "../common/Preloader/preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    currentPageNumberSelector,
    getUsersReselector,
    isFetchingSelector,
    isFollowingInProgressSelector,
    totalCountSelector,
    usersOnPageSelector
} from "../../redux/users-selectors";


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
        let {currentPageNumber, usersOnPage} = this.props
       this.props.getUsers(currentPageNumber, usersOnPage)
    }

    onClickPageChosen = (pageNumber: number) => {
        let {usersOnPage} = this.props
        this.props.getUsers(pageNumber,usersOnPage)
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

// let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
//     return {
//         usersState: state.usersPage.users,
//         totalCount: state.usersPage.totalCount,
//         currentPageNumber: state.usersPage.currentPageNumber,
//         usersOnPage: state.usersPage.usersOnPage,
//         isFetching: state.usersPage.isFetching,
//         isFollowingInProgress: state.usersPage.isFollowingInProgress
//
//     }
// }
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersState: getUsersReselector(state),
        totalCount: totalCountSelector(state),
        currentPageNumber: currentPageNumberSelector(state),
        usersOnPage: usersOnPageSelector(state),
        isFetching: isFetchingSelector(state),
        isFollowingInProgress: isFollowingInProgressSelector(state)

    }
}
export default compose<React.ComponentType>(connect(mapStateToProps, {
    setCurrentPage,
    setUsersOnPage,
    getUsers,
    followUserThunk,
    unFollowUserThunk
}),withAuthRedirect)(UsersContainer)