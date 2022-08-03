import React from "react";
import styles from './users.module.css'
import userImage from '../../assets/userImage.jpeg'
import {UserType} from "../../redux/usersReducer";
import {NavLink} from 'react-router-dom';

type UserFunctionPropsType = {
    user: UserType
    isFollowingInProgress: number[]
    followUserThunk: (userId: number) => void
    unFollowUserThunk: (userId: number) => void
}

export const User: React.FC<UserFunctionPropsType> = (
    {user, isFollowingInProgress, followUserThunk, unFollowUserThunk}

) => {

    return (
        <span>
            <div key={user.id} className={styles.usersStyle}>
                <NavLink to={`/profile/${user.id}`}>
                    <img src={user.photos.small !== null ? user.photos.small : userImage} alt={"img"}/>
                </NavLink>
            </div>
            <div>
                {!user.followed
                    ? <button disabled={isFollowingInProgress.some(id => id === user.id)} onClick={() => {
                        followUserThunk(user.id)
                    }}>FOLLOW</button>
                    : <button disabled={isFollowingInProgress.some(id => id === user.id)} onClick={() => {
                        unFollowUserThunk(user.id)
                    }}>UNFOLLOW</button>}
            </div>

            <span>
                    <span>
                        <div>
                            {user.name}
                        </div>
                        <div>
                            {user.status}
                        </div>
                    </span>
                    <span>
                        {/*<div>*/}
                        {/*    {u.location.country.title}*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    {u.location.city.title}*/}
                        {/*</div>*/}
                    </span>
                </span>
        </span>
    )
}





