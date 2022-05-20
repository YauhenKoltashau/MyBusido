import React from "react";
import {addMessageAC, createNewMessageUserAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import StoreContext from '../../StoreContext'

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