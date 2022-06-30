import React from "react";
import styles from './users.module.css'
import userImage from '../../assets/userImage.jpeg'
import {v1} from "uuid";
import {UsersType} from "../../redux/usersReducer";
import {NavLink} from 'react-router-dom';

type PageType = {
    id: string,
    number: number
}
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

export const Users = (props: UsersFunctionPropsType) => {
    console.log(props.isFollowingInProgress)
    let totalPages = Math.ceil(props.totalCount / props.usersOnPage)
    let pages: Array<PageType> = []
    for (let i = 1; i <= totalPages; i++) {
        let newPage = {
            id: v1(),
            number: i
        }
        pages.push(newPage)
    }
    return (
        <div>
            {pages.map((p) => {
                return (
                    <span key={p.id} onClick={(e) => props.onClickPageChosen(p.number)}
                          className={props.currentPageNumber === p.number ? styles.chosedPage : styles.unChosedPage}>{p.number}</span>
                )
            })
            }
            {props.usersState.map(u => <div key={u.id}>
                <span>
                    <div key={u.id} className={styles.usersStyle}>
                        <NavLink to={`/profile/${u.id}`}>
                        <img src={u.photos.small !== null ? u.photos.small : userImage} alt={"img"}/>
                            </NavLink>
                    </div>
                    <div>
                        {!u.followed
                            ? <button disabled={props.isFollowingInProgress.some(id => id === u.id)} onClick={() => {
                                props.followUserThunk(u.id)
                            }}>FOLLOW</button>
                            : <button disabled={props.isFollowingInProgress.some(id => id === u.id)} onClick={() => {
                               props.unFollowUserThunk(u.id)
                                // props.setFollowingInProgress(true,u.id)
                                // userAPI.unFollowUser(u.id)
                                //     .then(response => {
                                //         if (response.data.resultCode === 0) {
                                //             props.unFollowUser(u.id)
                                //
                                //         }
                                //         props.setFollowingInProgress(false, u.id)
                                //     })


                            }}>UNFOLLOW</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
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
            </div>)}


        </div>
    )
}





