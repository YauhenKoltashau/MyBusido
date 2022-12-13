import {ProfileUserType} from "../../../../redux/contentReducer";
import React from "react";
import {Contact} from "../contact/contact";
import styles from './ProfileData.module.scss'

type ProfileDataPropsType = {
    profile: ProfileUserType
    isOwner: boolean
    goToEditMode: () => void
}

export const ProfileData = ({profile,isOwner,goToEditMode}:ProfileDataPropsType) => {
  return(
      <div className={styles.profileDataBlock}>
          {isOwner&&<div><button onClick={goToEditMode}>edit</button></div>}
          <div><b>I'm:</b> {profile.fullName}</div>
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

      </div>
  )
}