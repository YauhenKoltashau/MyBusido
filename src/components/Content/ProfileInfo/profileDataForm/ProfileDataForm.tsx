import {ProfileUserType} from "../../../../redux/contentReducer";
import React from "react";
import styles from "../profileData/ProfileData.module.scss";
import {Contact} from "../contact/contact";
import {createField, Input} from "../../../common/FormControls/FormControls";

export const ProfileDataForm = ({profile, saveChanges}:{profile:ProfileUserType, saveChanges:()=>void}) => {

    return(
        <form>
            <div><button onClick={saveChanges}>save</button></div>
            <div><b>I'm:</b> {createField("Full name", "full name", [], Input)}</div>
            <div><b>About me:</b> {profile.aboutMe ? <div>{profile.aboutMe}</div> : 'no info'}</div>
            <div><b>Skills:</b> {!profile.lookingForAJob ? 'no' : 'yes'}</div>
            <div><b>Description</b>: {profile.lookingForAJobDescription ?
                <div>{profile.lookingForAJobDescription}</div> : 'no info'}</div>
            <div className={styles.contactBlock}>
                <b>Contacts:</b>
                {Object.keys(profile.contacts).map((key) => {
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
        </form>
    )
}