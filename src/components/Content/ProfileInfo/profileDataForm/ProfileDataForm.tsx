import {ProfileUserType} from "../../../../redux/contentReducer";
import React from "react";
import styles from "../profileData/ProfileData.module.scss";
import {Contact} from "../contact/contact";
import {createField, Input, Texarea} from "../../../common/FormControls/FormControls";
import {InjectedFormProps, reduxForm} from "redux-form";



export const ProfileDataForm:React.FC<InjectedFormProps<ProfileUpdateDataType>> = ({handleSubmit, error}) => {
    return(
        <form onSubmit={handleSubmit}>
            {/*<div><button onClick={saveChanges}>save</button></div>*/}
            <div><b>I'm:</b> {createField("Full name", "fullName", [], Input)}</div>
            <div><b>LookingForAJob:</b> {createField("Looking for a job", "lookingForAJob", [], Input, {type: "checkbox"})}</div>
            <div><b>My professional skills:</b> {createField("My professional skills", "lookingForAJobDescription", [], Texarea)}</div>
            <div><b>About me:</b> {createField("About me", "aboutMe", [], Texarea)}</div>
            {error&&<div className={styles.error}>{error}</div>}
            <div>
                <button>Save</button>
            </div>
            {/*<div><b>Skills:</b> {!profile.lookingForAJob ? 'no' : 'yes'}</div>*/}
            {/*<div><b>Description</b>: {profile.lookingForAJobDescription ?*/}
            {/*    <div>{profile.lookingForAJobDescription}</div> : 'no info'}</div>*/}
            {/*<div className={styles.contactBlock}>*/}
            {/*    <b>Contacts:</b>*/}
            {/*    {Object.keys(profile.contacts).map((key) => {*/}
            {/*            return (*/}
            {/*                <Contact*/}
            {/*                    key={key}*/}
            {/*                    title={key}*/}
            {/*                    value={profile.contacts[key]}*/}
            {/*                />*/}
            {/*            )*/}

            {/*        }*/}
            {/*    )}*/}
            {/*</div>*/}
        </form>
    )
}
export type ProfileUpdateDataType = {
    fullName?: string
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    aboutMe?: string
}
export const ProfileDataReduxForm = reduxForm<ProfileUpdateDataType>({form: 'edit-profile'})(ProfileDataForm)