import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import React, {ChangeEvent, ChangeEventHandler, RefObject, useState} from "react";
import {postsDataType} from "../../../redux/state";


type postsMyPostsType = {
    postsData: Array<postsDataType>
    // callBack: (newPost: string) => void
    // newMessage: string
    callBackAdd: () => void
    newPostText: string
    updateNewPostText:(newText: string)=>void

}


export const MyPosts = (props: postsMyPostsType) => {
    let postItem = props.postsData.map((p) =>
        <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)

    // let [newMessage, setNewMessage] = useState('')

    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
            }

    const addPostOnClick = () => {
        props.callBackAdd()


    }



    return (
        <div className={classes.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <div>
                    <textarea onChange={onChangeTextareaHandler} value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={addPostOnClick}>Add post</button>
                </div>


            </div>
            <div className={classes.posts}>
                {postItem}
            </div>


        </div>

    )
}