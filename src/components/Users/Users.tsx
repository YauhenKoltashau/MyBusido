import React from "react";
import styles from './users.module.css'
import userImage from '../assets/userImage.jpeg'
import {v1} from "uuid";
import {UsersType} from "../../redux/usersReducer";
import {NavLink} from 'react-router-dom';
import axios from "axios";

type PageType = {
    id: string,
    number: number
}
type UsersFunctionPropsType = {
    usersState: UsersType
    followUser: (id: number) => void
    unFollowUser: (id: number) => void
    totalCount: number
    usersOnPage: number
    currentPageNumber: number
    onClickPageChosen: (pageNumber: number) => void
}

export const Users = (props: UsersFunctionPropsType) => {
    console.log(props.usersState)
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
                            ? <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {}, {withCredentials: true, headers: {'API-KEY': '26ffa3e6-cad0-4cf9-8170-904cae9d9ac2'}}).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.followUser(u.id)
                                    }

                                })

                            }}>FOLLOW</button>
                            : <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {withCredentials: true, headers: {'API-KEY': '26ffa3e6-cad0-4cf9-8170-904cae9d9ac2'}}).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unFollowUser(u.id)

                                    }
                                })


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





