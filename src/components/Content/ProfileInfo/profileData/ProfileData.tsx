import {ProfileUserType} from "../../../../redux/contentReducer";
import React, {useState} from "react";
import {Contact} from "../contact/contact";
import styles from './ProfileData.module.scss'

type ProfileDataPropsType = {
    profile: ProfileUserType
    isOwner: boolean
    goToEditMode: () => void
}

export const ProfileData = ({profile, isOwner, goToEditMode}: ProfileDataPropsType) => {
    return (
        <div className={styles.profileDataBlock}>
            {isOwner && <div>
                <button onClick={goToEditMode}>Edit</button>
            </div>}
            <div><b>I'm:</b> {profile.fullName}</div>

            <div><b>Looking for a job:</b> {!profile.lookingForAJob ? 'no' : 'yes'}</div>
            <div><b>My skills:</b> {profile.lookingForAJobDescription ?
                <div>{profile.lookingForAJobDescription}</div> : 'no info'}</div>
            <div><b>About me:</b> {profile.aboutMe ? <div>{profile.aboutMe}</div> : 'no info'}</div>
            <div className={styles.contactBlock}>
                <b>Contacts:</b>
                {Object.keys(profile.contacts).map((key, index) => {
                        return (
                            <Contact
                                key={key}
                                title={key}
                                value={profile.contacts[key]}
                            />
                        )
                    }
                )}
            </div>

        </div>
    )
}