import React from "react";
import './Content.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileContainerPropsType} from "./ProfileContainer";



export const Content= (props: ProfileContainerPropsType) => {
    return (
        <div>
            <ProfileInfo profileState={props.state.profile}/>
            <MyPostsContainer/>

        </div>
    )
}





