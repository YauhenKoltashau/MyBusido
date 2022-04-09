import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import React from "react";

export const MyPosts = () => {
    return (
        <div className={classes.posts}>MyPosts
            <div>
                <textarea placeholder={"Add comment"}></textarea>
                <button>Add post</button>

            </div>
            <Post message={"It's my first post"} likesCount={10}/>
            <Post message={"How are you!"} likesCount={7}/>
        </div>

    )
}