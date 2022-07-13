import React from "react";
import classes from'./ProfileInfo.module.css';
import {ProfileUserType} from "../../../redux/contentReducer";
import {Preloader} from "../../Preloader/preloader";
import userImage from '../../../assets/userImage.jpeg'
import {ProfileStatus} from "../Ava/ProfileStatus";

type ProfileInfoPropsType = {
    profile:ProfileUserType
    status: string
    updateStatusThunk: (text: string)=>void
}
export function ProfileInfo(props:ProfileInfoPropsType) {
    if(!props.profile){
        <Preloader/>
    }
    return (

        <div className={classes.profileItem}>
            <img src={props.profile.photos.small?props.profile.photos.small:userImage} alt={'user image'}/>
            <div>{props.profile.fullName}</div>
            <span>{props.profile.aboutMe}</span>
            <span>{props.profile.lookingForAJobDescription}</span>
            <ProfileStatus status={props.status} callback={props.updateStatusThunk}/>


        </div>
    )
}