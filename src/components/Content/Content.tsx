import React from "react";
import './Content.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postsDataType} from "../../index";

type ContentPropsType = {
    postsData: Array<postsDataType>
}

export const Content= (props:ContentPropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}/>

        </div>
    )
}





