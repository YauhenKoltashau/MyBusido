import React from "react";
import './Content.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postsDataType} from "../../redux/state";


type ContentPropsType = {
    postsData: Array<postsDataType>
    // callBack: (newPost:string)=>void
    // newMessage: string
    callBackAdd: () => void
    newPostText:string
    updateNewPostText: (newText: string)=>void
}

export const Content= (props:ContentPropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}
                     // callBack={props.callBack}
                     // newMessage={props.newMessage}
                     callBackAdd={props.callBackAdd}
                     newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}
            />

        </div>
    )
}





