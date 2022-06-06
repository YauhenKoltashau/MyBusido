
import React from "react";
import styles from './users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userImage from './../images/userImage.jpeg'

const Users2 = (props: UsersPropsType) => {
    const getUsers = () => {
        if(props.usersState.length === 0){
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>
                props.setUsers(response.data.items)
            )
        }
    }
    return (

        <div>
            <button onClick={getUsers}>Get Users</button>
            {props.usersState.map(u => <div key={u.id}>
                <span>
                    <div key={u.id} className={styles.usersStyle}>
                        <img src={u.photos.small!==null?u.photos.small:userImage} alt={"img"}/>
                    </div>
                    <div>
                        {u.followed
                            ?<button onClick={() => {props.unFollowUser(u.id)}}>FOLLOW</button>
                            :<button onClick={() => {props.followUser(u.id)}}>UNFOLLOW</button>}
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


        </div>)
}

