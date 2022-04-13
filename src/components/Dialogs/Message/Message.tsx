import classes from './../Dialogs.module.css';
import React from "react";
import {messagesType} from "../../../redux/state";

type MessagePropsType = messagesType



export const Message: React.FC<messagesType> = (props:MessagePropsType) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}
