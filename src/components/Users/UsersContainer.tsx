import {connect} from "react-redux";
import { Dispatch } from "redux";
import {AppStateType} from "../../redux/redux-store";
import {FollowAC, SetUsersAC, UnfollowAC, UsersType} from "../../redux/usersReducer";
import Users from "./UsersC";


// children?: ReactNode
type mapStateToPropsType = {
    usersState: UsersType
}
type mapDispatchToPropsType = {
    followUser:(id:number) => void
    unFollowUser:(id:number) => void
    setUsers: (users:UsersType) => void
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return{
        usersState: state.usersPage
    }
}
let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return{
        followUser: (id:number) => {
            dispatch(FollowAC(id))

        },
        unFollowUser: (id:number)=> {
            dispatch(UnfollowAC(id))
        },
        setUsers: (users:UsersType) => {
            dispatch(SetUsersAC(users))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)