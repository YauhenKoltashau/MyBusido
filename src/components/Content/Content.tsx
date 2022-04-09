import React from "react";
import './Content.module.css';
import classes from './Content.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {Ava} from "./Ava/Ava";

export const Content= () => {
    return (
        <div>
            <img
                src={"https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"}/>
            <Ava/>
            <MyPosts/>
        </div>
    )
}





