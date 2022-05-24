import {connect} from "react-redux";
import { Dispatch } from "redux";
import {AppStateType} from "../../redux/redux-store";
import {FollowAC, SetUsersAC, UnfollowAC, UsersType} from "../../redux/usersReducer";
import {Users} from "./Users";

type mapStateToPropsType = {
    usersState: UsersType
}
type mapDispatchToPropsType = {
    followUser:(id:string) => void
    unFollowUser:(id:string) => void
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
        followUser: (id:string) => {
            dispatch(FollowAC(id))

        },
        unFollowUser: (id:string)=> {
            dispatch(UnfollowAC(id))
        },
        setUsers: (users:UsersType) => {
            console.log(users)
            dispatch(SetUsersAC(users))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)