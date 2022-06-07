import {Ava} from "../Ava/Ava";
import React from "react";
import classes from'./ProfileInfo.module.css';
import {ProfileUserType} from "../../../redux/contentReducer";
import userImage from './../../assets/userImage.jpeg'

type ProfileInfoPropsType = {
    profileState:ProfileUserType
}
export function ProfileInfo(props:ProfileInfoPropsType) {
    console.log(props.profileState)
    return (

        <div className={classes.profileItem}>
            <img src={props.profileState.photos.small!==null?props.profileState.photos.small:userImage}/>
            <div>{props.profileState.fullName}</div>
            {/*<Ava />*/}
        </div>
    )
}