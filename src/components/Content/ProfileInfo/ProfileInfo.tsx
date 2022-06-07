import {Ava} from "../Ava/Ava";
import React from "react";
import classes from'./ProfileInfo.module.css';
import {ProfileUserType} from "../../../redux/contentReducer";
import userImage from './../../assets/userImage.jpeg'
import {Preloader} from "../../Preloader/preloader";

type ProfileInfoPropsType = {
    profile:ProfileUserType
}
export function ProfileInfo(props:ProfileInfoPropsType) {
    if(!props.profile){
        <Preloader/>
    }
    console.log(props.profile)
    return (

        <div className={classes.profileItem}>
            <img src={props.profile.photos.small!==null?props.profile.photos.small:userImage}/>
            <div>{props.profile.fullName}</div>
            <span>{props.profile.aboutMe}</span>
            <span>{props.profile.lookingForAJobDescription}</span>
        </div>
    )
}