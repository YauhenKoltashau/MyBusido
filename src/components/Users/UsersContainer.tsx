import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {
    FollowAC,
    SetCurrentPageAC,
    SetTotalUsersAC,
    SetUsersAC, setUsersOnPageAC,
    UnfollowAC,
    UsersType
} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

type mapStateToPropsType = {
    usersState: UsersType
    totalCount: number
    currentPageNumber: number
    usersOnPage: number
}
type mapDispatchToPropsType = {
    followUser: (id: number) => void
    unFollowUser: (id: number) => void
    setUsers: (users: UsersType) => void
    setTotalUsers: (totalUsers: number) => void
    setCurrentPage: (pageNumber: number) => void
    setUsersOnPage: (usersOn: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPageNumber}&count=${this.props.usersOnPage}`).then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsers(response.data.totalCount)
            }
        )
    }

    onClickPageChosen = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersOnPage}`).then(response => {
            this.props.setUsers(response.data.items)

        })
    }

    render() {
        return (
            <Users usersState={this.props.usersState}
                   followUser={this.props.followUser}
                   unFollowUser={this.props.unFollowUser}
                   totalCount={this.props.totalCount}
                   usersOnPage={this.props.usersOnPage}
                   currentPageNumber={this.props.currentPageNumber}
                   onClickPageChosen={this.onClickPageChosen}
            />
        )

    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersState: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        currentPageNumber: state.usersPage.currentPageNumber,
        usersOnPage: state.usersPage.usersOnPage

    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        followUser: (id: number) => {
            dispatch(FollowAC(id))

        },
        unFollowUser: (id: number) => {
            dispatch(UnfollowAC(id))
        },
        setUsers: (users: UsersType) => {
            dispatch(SetUsersAC(users))
        },
        setTotalUsers: (totalUsers: number) => {
            dispatch(SetTotalUsersAC(totalUsers))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(SetCurrentPageAC(pageNumber))
        },
        setUsersOnPage: (usersOn: number) => {
            dispatch((setUsersOnPageAC(usersOn)))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)