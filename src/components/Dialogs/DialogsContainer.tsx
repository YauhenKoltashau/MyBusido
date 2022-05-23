import React from "react";
import {addMessageAC, createNewMessageUserAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
// import StoreContext from '../../StoreContext'
import {connect} from "react-redux";
import {AppStateType, DialogsDialogType, DispatchesType} from "../../redux/redux-store";

// export const DialogsContainer = () => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {(store)=>{
//                 let dialogs = store.getState().dialogPage.dialogs
//                 let messages = store.getState().dialogPage.messages
//                 const newMessageUser = (text: string) => {
//                     store.dispatch(createNewMessageUserAC(text))
//                 }
//                 const addMessage = () => {
//                     store.dispatch(addMessageAC())
//                 }
//                 return(
//                     <Dialogs
//                         newMessageUser={newMessageUser}
//                         addMessage={addMessage}
//                         dialogs={dialogs}
//                         messages={messages}
//                         newMessageUserText={store.getState().dialogPage.newMessageUser}/>
//                 )
//             }}
//         </StoreContext.Consumer>
//
//
//     )
// }

let mapStateToProps = (state:AppStateType) => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
        newMessageUserText: state.dialogPage.newMessageUser
    }
}
let mapDispatchToProps = (dispatch: DispatchesType) => {
    return {
        newMessageUser:(text: string) => {
            dispatch(createNewMessageUserAC(text))
        },
        addMessage: () => {
            dispatch(addMessageAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)