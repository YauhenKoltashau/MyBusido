import React from "react";
import './Content.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionCreatorReturnTypes, PostDataContentType} from "../../redux/redux-store";


type ContentPropsType = {
    postsData: PostDataContentType
    dispatch: (action: ActionCreatorReturnTypes) => void
    newPostText:string

}

export const Content= (props:ContentPropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}
                     dispatch={props.dispatch}
                     newPostText={props.newPostText}
            />

        </div>
    )
}





