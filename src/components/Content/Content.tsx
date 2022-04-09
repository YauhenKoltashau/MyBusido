import React from "react";
import './Content.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Content= () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>

        </div>
    )
}





