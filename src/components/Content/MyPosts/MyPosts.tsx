import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import React, {ChangeEvent} from "react";
import {PostDataContentType} from "../../../redux/redux-store";

type postsMyPostsType = {
    postsData:PostDataContentType
    addNewMessage:(text:string)=>void
    addPostOnClick:()=>void
    newPostText: string
}

export const MyPosts = (props: postsMyPostsType) => {
    let postItem = props.postsData.map((p) =>
        <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
       let text = e.currentTarget.value
        props.addNewMessage(text)
            }

    const addPostOnClick = () => {
        props.addPostOnClick()
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