
import React from "react";
import styles from './users.module.css'
import {v1} from "uuid";
import {UsersPropsType} from "./UsersContainer";



export const Users = (props: UsersPropsType) => {
    if(props.usersState.length === 0){
        props.setUsers([
            {id:v1(), fullName:"Nikita K",followed: true,photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsl8vuWzJxPHDZGVlf_RyzNMgc7vI4YPV98A&usqp=CAU',status:'',location:{city:{id:v1(),title:'Minsk'},country:{id:v1(),title:'Belarus'}}},
            {id:v1(), fullName:"Pavel T",followed: true,photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsl8vuWzJxPHDZGVlf_RyzNMgc7vI4YPV98A&usqp=CAU',status:'',location:{city:{id:v1(),title:'Svetly'},country:{id:v1(),title:'Belarus'}}},
            {id:v1(), fullName:"Rustam G",followed: false,photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsl8vuWzJxPHDZGVlf_RyzNMgc7vI4YPV98A&usqp=CAU',status:'',location:{city:{id:v1(),title:'Minsk'},country:{id:v1(),title:'Belarus'}}},
            {id:v1(), fullName:"Yauhen K",followed: true,photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsl8vuWzJxPHDZGVlf_RyzNMgc7vI4YPV98A&usqp=CAU',status:'',location:{city:{id:v1(),title:'Minsk'},country:{id:v1(),title:'Belarus'}}},

        ])

    }

    return (
        <div>
            {props.usersState.map(u => <div key={u.id}>
                <span>
                    <div key={u.id} className={styles.usersStyle}>
                        <img src={u.photoUrl} alt={"img"}/>
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
                            {u.fullName}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {u.location.country.title}
                        </div>
                        <div>
                            {u.location.city.title}
                        </div>
                    </span>
                </span>
            </div>)}


        </div>)
}

