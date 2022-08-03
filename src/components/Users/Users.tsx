import React from "react";
import {UsersType} from "../../redux/usersReducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

type UsersFunctionPropsType = {
    usersState: UsersType
    totalCount: number
    usersOnPage: number
    currentPageNumber: number
    onClickPageChosen: (pageNumber: number) => void
    isFollowingInProgress: number[]
    followUserThunk: (userId: number) => void
    unFollowUserThunk: (userId: number) => void
}

export const Users: React.FC<UsersFunctionPropsType> = ({usersState, totalCount, usersOnPage, currentPageNumber, onClickPageChosen, ...restProps}) => {

    return (
        <div>
            <Paginator
                totalCount={totalCount}
                usersOnPage={usersOnPage}
                currentPageNumber={currentPageNumber}
                onClickPageChosen={onClickPageChosen}
            />
            {usersState.map(u => <User key={u.id} user={u} {...restProps}/>)}
        </div>
    )
}





