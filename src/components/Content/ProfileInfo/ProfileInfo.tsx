import {Ava} from "../Ava/Ava";
import React from "react";
import classes from'./ProfileInfo.module.css';

export function ProfileInfo() {
    return (
        <div className={classes.profileItem}>
            <img
                src={"https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"}/>
            <Ava/>
        </div>
    )
}