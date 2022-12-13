import React from "react";
import './Content.module.scss';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileContainerPropsType} from "./ProfileContainer";
import {UserPhotoType} from "../../api/api";
type ProfileInfoAdditionalType = {
    isOwner: boolean
    saveFoto: (file: UserPhotoType)=> void
}

export const Content= (props: ProfileContainerPropsType & ProfileInfoAdditionalType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatusThunk={props.updateStatusThunk}
                         isOwner={props.isOwner}
                         saveFoto={props.saveFoto}
            />
            <MyPostsContainer/>

        </div>
    )
}





