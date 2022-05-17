import {NavLink} from 'react-router-dom';
import classes from './Dialogs.module.css';
import React, {ChangeEvent} from "react";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {
    ActionCreatorReturnTypes, DialogsDialogType, MessageDialogType,

} from "../../redux/redux-store";
import {addMessageAC, createNewMessageUserAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import StoreContext from './../../StoreContext'

export const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>
            {(store)=>{
                let dialogs = store.getState().dialogPage.dialogs
                let messages = store.getState().dialogPage.messages
                const newMessageUser = (text: string) => {
                    store.dispatch(createNewMessageUserAC(text))
                }
                const addMessage = () => {
                    store.dispatch(addMessageAC())
                }
                return(
                    <Dialogs
                        newMessageUser={newMessageUser}
                        addMessage={addMessage}
                        dialogs={dialogs}
                        messages={messages}
                        newMessageUserText={store.getState().dialogPage.newMessageUser}/>
                )
            }}
        </StoreContext.Consumer>


    )
}