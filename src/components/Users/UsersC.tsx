import React from "react";
import styles from './users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userImage from './../images/userImage.jpeg'

class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>
            this.props.setUsers(response.data.items)
        )
    }

    // getUsers = () => {
    //     if(this.props.usersState.length === 0){
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>
    //             this.props.setUsers(response.data.items)
    //         )
    //     }
    // }
    render() {
        return (

            <div>
                {/*<button onClick={this.getUsers}>Get Users</button>*/}
                {this.props.usersState.map(u => <div key={u.id}>
                <span>
                    <div key={u.id} className={styles.usersStyle}>
                        <img src={u.photos.small!==null?u.photos.small:userImage} alt={"img"}/>
                    </div>
                    <div>
                        {u.followed
                            ?<button onClick={() => {this.props.unFollowUser(u.id)}}>FOLLOW</button>
                            :<button onClick={() => {this.props.followUser(u.id)}}>UNFOLLOW</button>}
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


}
export default Users

