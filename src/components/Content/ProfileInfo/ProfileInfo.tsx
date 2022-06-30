import React from "react";
import classes from'./ProfileInfo.module.css';
import {ProfileUserType} from "../../../redux/contentReducer";
import {Preloader} from "../../Preloader/preloader";
import userImage from '../../../assets/userImage.jpeg'

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
            <img src={props.profile.photos.small?props.profile.photos.small:userImage} alt={'user image'}/>
            <div>{props.profile.fullName}</div>
            <span>{props.profile.aboutMe}</span>
            <span>{props.profile.lookingForAJobDescription}</span>
        </div>
    )
}