import {NavLink} from 'react-router-dom';
import classes from './Dialogs.module.css';
import React, {ChangeEvent, RefObject, useState} from "react";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {dialogsType, messagesType} from "../../redux/state";

type DialogsPagePropsType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
}
export const Dialogs = (props: DialogsPagePropsType) => {
    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()
    const addPost = () => {
        let text = newPostElement.current?.value
        console.log(text)
    }


    let dialogsElement = props.dialogs.map((d,index) =>
        <DialogItem key={d.id} name={d.name} id={d.id}/>
    )
    let messagesItem = props.messages.map((m) =>
        <Message key={m.id} id={m.id} message={m.message}/>)
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElement}
            </div>

            <div className={classes.messages}>
                {messagesItem}
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add</button>
            </div>
        </div>
    )
}