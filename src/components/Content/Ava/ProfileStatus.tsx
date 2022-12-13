import classes from "./Ava.module.css";
import React from "react";
import {StatusFunctionComponent} from "../ProfileInfo/StatusFunctionComponent";
import {StatusClassComponent} from "../ProfileInfo/StatusClassComponent";

export const ProfileStatus = (props:{status: string, callback:(status: string)=>void}) => {
    return (<div>
            {/*function component*/}
            {/*<div className={classes.item}>*/}
            {/*    <EditableItem title={props.status} callback={props.callback}/>*/}
            {/*</div>*/}
            {/*class component*/}
            {/*<div className={classes.item}>*/}
            {/*    <StatusClassComponent title={props.status} callback={props.callback}/>*/}
            {/*</div>*/}
            <div className={classes.item}>
                <b>Status:</b>
                <StatusFunctionComponent title={props.status} callback={props.callback}/>
            </div>


        </div>
    )
}