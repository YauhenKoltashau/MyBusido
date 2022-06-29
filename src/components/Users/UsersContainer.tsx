import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followUser,
    setCurrentPage, setIsFetching,
    setTotalUsers,
    setUsers, setUsersOnPage,
    unFollowUser,
    UsersType
} from "../../redux/usersReducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../Preloader/preloader";
import {userAPI} from "../../api/api";


type mapStateToPropsType = {
    usersState: UsersType
    totalCount: number
    currentPageNumber: number
    usersOnPage: number
    isFetching: boolean
}
type mapDispatchToPropsType = {
    followUser: (id: number) => void
    unFollowUser: (id: number) => void
    setUsers: (users: UsersType) => void
    setTotalUsers: (totalUsers: number) => void
    setCurrentPage: (pageNumber: number) => void
    setUsersOnPage: (usersOn: number) => void
    setIsFetching: (isFetching: boolean) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.setIsFetching(true)
        userAPI.getUsers(this.props.currentPageNumber,this.props.usersOnPage).then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.items)
                this.props.setTotalUsers(response.totalCount)
            }
        )
    }

    onClickPageChosen = (pageNumber: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        userAPI.getUsers(pageNumber,this.props.usersOnPage).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.items)

        })
    }

    render() {
        return (<>
                {this.props.isFetching
                    ? <Preloader/> : null}
                <Users usersState={this.props.usersState}
                       followUser={this.props.followUser}
                       unFollowUser={this.props.unFollowUser}
                       totalCount={this.props.totalCount}
                       usersOnPage={this.props.usersOnPage}
                       currentPageNumber={this.props.currentPageNumber}
                       onClickPageChosen={this.onClickPageChosen}
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
        isFetching: state.usersPage.isFetching

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


export default connect(mapStateToProps, {
    followUser, unFollowUser, setUsers, setTotalUsers, setCurrentPage, setUsersOnPage, setIsFetching})(UsersContainer)