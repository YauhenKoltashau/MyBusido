import {NavLink} from 'react-router-dom';
import classes from './Dialogs.module.css';
import React from "react";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {} from "../../App";
import {dialogsType, messagesType} from "../../index";

type DialogsPropsType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
}

export const Dialogs = (props: DialogsPropsType) => {
    let dialogsElement = props.dialogs.map((d) =>
        <DialogItem name={d.name} id={d.id}/>
    )
    let messagesItem = props.messages.map((m) =>
        <Message message={m.message}/>)
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesItem}
            </div>
        </div>
    )
}