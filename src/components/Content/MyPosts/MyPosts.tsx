import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import React from "react";

export const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <div>
                    <textarea placeholder={"Add comment"}></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>


            </div>
            <div className={classes.posts}>
                <Post message={"It's my first post"} likesCount={10}/>
                <Post message={"How are you!"} likesCount={7}/>
            </div>


        </div>

    )
}