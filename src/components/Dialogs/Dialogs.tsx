import {NavLink} from 'react-router-dom';
import classes from './Dialogs.module.css';
import React, {ChangeEvent} from "react";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {
    ActionCreatorReturnTypes, DialogsDialogType, MessageDialogType,

} from "../../redux/redux-store";
import {addMessageAC, createNewMessageUserAC} from "../../redux/dialogsReducer";

type DialogsPagePropsType = {
    dialogs: DialogsDialogType
    messages: MessageDialogType
    dispatch:(action:ActionCreatorReturnTypes)=>void
    newMessageUserText: string
}
export const Dialogs = (props: DialogsPagePropsType) => {
    const newMessageUser = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(createNewMessageUserAC(e.currentTarget.value))
    }
    const addMessage = () => {
        props.dispatch(addMessageAC())
    }

    let dialogsElement = props.dialogs.map((d) =>
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
                <textarea placeholder={'Enter your message'} onChange={newMessageUser} value={props.newMessageUserText}></textarea>
                <button onClick={addMessage}>Add</button>
            </div>
        </div>
    )
}