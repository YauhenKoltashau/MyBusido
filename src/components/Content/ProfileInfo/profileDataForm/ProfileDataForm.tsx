import React from "react";
import styles from "../../../common/FormControls/FormControl.module.css";
import {createField, Input, Texarea} from "../../../common/FormControls/FormControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileUserType} from "../../../../redux/contentReducer";
import s from "../contact/Contact.module.scss"
import {log} from "util";

interface IProps {
    profile: ProfileUserType;
}

export const ProfileDataForm: React.FC<InjectedFormProps<ProfileUpdateDataType, IProps> & IProps> = ({
                                                                                                         handleSubmit,
                                                                                                         profile,
                                                                                                         error
                                                                                                     }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>Save</button>
            </div>
            {error && <div className={styles.error}>{error}</div>}
            <div><b>I'm:</b> {createField("Full name", "fullName", [], Input)}</div>
            <div>
                <b>LookingForAJob:</b> {createField("Looking for a job", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>
            <div><b>My professional
                skills:</b> {createField("My professional skills", "lookingForAJobDescription", [], Texarea)}</div>
            <div><b>About me:</b> {createField("About me", "aboutMe", [], Texarea)}</div>
            <b>Contacts:</b>
            {Object.keys(profile.contacts).map((key) => {
                    return (
                        <div key={key} className={s.contact}>
                            <b>{key}:</b>
                            {createField(key, 'contacts.' + key, [], Input)}
                        </div>
                    )

                }
            )}

        </form>
    )
}
export type ProfileUpdateDataType = {
    fullName?: string
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    aboutMe?: string
}
export const ProfileDataReduxForm = reduxForm<ProfileUpdateDataType, IProps>({form: 'edit-profile'})(ProfileDataForm)