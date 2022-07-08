import classes from "./Ava.module.css";
import React from "react";
import {EditableItem} from "../../EditableSpan/EditableItem";
import {StatusClassComponent} from "../ProfileInfo/StatusClassComponent";

export const ProfileStatus = (props:{status: string, callback:(status: string)=>void}) => {
    return (<div>
            {/*function component*/}
            {/*<div className={classes.item}>*/}
            {/*    <EditableItem title={props.status} callback={props.callback}/>*/}
            {/*</div>*/}
            {/*class component*/}
            <div className={classes.item}>
                <StatusClassComponent title={props.status} callback={props.callback}/>
            </div>


        </div>
    )
}