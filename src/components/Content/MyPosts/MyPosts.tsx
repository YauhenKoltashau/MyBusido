import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import React from "react";
import {postsDataType} from "../../../redux/state";


type postsMyPostsType = {
    postsData: Array<postsDataType>
}
export const MyPosts = (props: postsMyPostsType) => {
    let postItem = props.postsData.map((p) =>
        <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)
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
                {postItem}
            </div>


        </div>

    )
}