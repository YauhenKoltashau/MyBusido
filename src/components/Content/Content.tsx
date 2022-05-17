import React from "react";
import './Content.module.css';

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionCreatorReturnTypes, PostDataContentType} from "../../redux/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";



export const Content= () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>

        </div>
    )
}





