import React, {useState} from "react";
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

export const Users: React.FC<UsersFunctionPropsType> = ({
                                                            usersState,
                                                            totalCount,
                                                            usersOnPage,
                                                            currentPageNumber,
                                                            onClickPageChosen,
                                                            ...restProps
                                                        }) => {

    let [letter, setLetter] = useState('')
    let totalUsers = totalCount
    const checkName = (name: string) => {
        if (name.toLowerCase().includes(letter)) {
            return true
        }
        return false
    }

    return (
        <div>
            <Paginator
                totalCount={totalUsers}
                usersOnPage={usersOnPage}
                currentPageNumber={currentPageNumber}
                onClickPageChosen={onClickPageChosen}
            />
            <input onChange={(e) => {
                setLetter(e.currentTarget.value)
            }}/>

            {letter !== ''
                ? usersState
                    .filter(u => checkName(u.name))
                    .map(u => <User key={u.id} user={u} {...restProps}/>)
                : usersState.map(u => <User key={u.id} user={u} {...restProps}/>)
            }
        </div>
    )
}





