import classes from './../Dialogs.module.css';
import React from "react";
import {MessageType} from "../../../redux/redux-store";
type MessagePropsType = {
    id: string
    message: string
}



export const Message: React.FC<MessageType> = (props:MessagePropsType) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}
