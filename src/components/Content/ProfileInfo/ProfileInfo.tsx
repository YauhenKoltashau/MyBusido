import React, {ChangeEvent, useState} from "react";
import classes from './ProfileInfo.module.scss';
import {ProfileUserType} from "../../../redux/contentReducer";
import {Preloader} from "../../common/Preloader/preloader";
import userImage from '../../../assets/userImage.jpeg'
import {ProfileStatus} from "../Ava/ProfileStatus";
import {UserPhotoType} from "../../../api/api";
import {Contact} from "./contact/contact";
import {ProfileData} from "./profileData/ProfileData";
import {ProfileDataForm} from "./profileDataForm/ProfileDataForm";

type ProfileInfoPropsType = {
    profile: ProfileUserType
    status: string
    updateStatusThunk: (text: string) => void
    isOwner: boolean
    saveFoto: (file: UserPhotoType) => void
}

export function ProfileInfo({profile, status, updateStatusThunk, isOwner, saveFoto}: ProfileInfoPropsType) {
    const[editMode, setEditMode] = useState<boolean>(false)
    if (!profile) {
        <Preloader/>
    }
    console.log(profile.aboutMe)
    const fotoSelector = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            saveFoto(e.target.files[0])
        }
    }
    return (

        <div className={classes.profileBlock}>
            <img src={profile.photos.small || profile.photos.large || userImage}
                 alt={'user image'}/>
            {isOwner && <input type={'file'} onChange={fotoSelector}/>}
            <ProfileStatus status={status} callback={updateStatusThunk}/>
            { editMode
                ?<ProfileDataForm profile={profile} saveChanges={()=>{}}/>
                :<ProfileData profile={profile} isOwner={isOwner} goToEditMode={()=>setEditMode(true)}/>}




        </div>
    )
}

