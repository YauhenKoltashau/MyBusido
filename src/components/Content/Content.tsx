import React from "react";
import './Content.module.scss';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileContainerPropsType} from "./ProfileContainer";
import {UserPhotoType} from "../../api/api";
import {ProfileUpdateDataType} from "./ProfileInfo/profileDataForm/ProfileDataForm";

type ProfileInfoAdditionalType = {
    isOwner: boolean
    saveFoto: (file: UserPhotoType)=> void
    saveProfileData:(updateProfileData: ProfileUpdateDataType) => Promise<any>
}

export const Content= (props: ProfileContainerPropsType & ProfileInfoAdditionalType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatusThunk={props.updateStatusThunk}
                         isOwner={props.isOwner}
                         saveFoto={props.saveFoto}
                         saveProfileData={props.saveProfileData}
            />
            <MyPostsContainer/>

        </div>
    )
}





