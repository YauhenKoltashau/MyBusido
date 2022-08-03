import React from "react";
import classes from './ProfileInfo.module.css';
import {ProfileUserType} from "../../../redux/contentReducer";
import {Preloader} from "../../common/Preloader/preloader";
import userImage from '../../../assets/userImage.jpeg'
import {ProfileStatus} from "../Ava/ProfileStatus";

type ProfileInfoPropsType = {
    profile:ProfileUserType
    status: string
    updateStatusThunk: (text: string)=>void
}

export function ProfileInfo({profile,status, updateStatusThunk}: ProfileInfoPropsType) {
    if (!profile) {
        <Preloader/>
    }
    return (

        <div className={classes.profileItem}>
            <img src={profile.photos.small ? profile.photos.small : userImage}
                 alt={'user image'}/>
            <div>{profile.fullName}</div>
            <span>{profile.aboutMe}</span>
            <span>{profile.lookingForAJobDescription}</span>
            <ProfileStatus status={status} callback={updateStatusThunk}/>


        </div>
    )
}