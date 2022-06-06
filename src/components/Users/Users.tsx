import React from "react";
import styles from './users.module.css'
import userImage from '../assets/userImage.jpeg'
import {v1} from "uuid";
import {UsersType} from "../../redux/usersReducer";

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
                        <img src={u.photos.small !== null ? u.photos.small : userImage} alt={"img"}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unFollowUser(u.id)
                            }}>FOLLOW</button>
                            : <button onClick={() => {
                                props.followUser(u.id)
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





