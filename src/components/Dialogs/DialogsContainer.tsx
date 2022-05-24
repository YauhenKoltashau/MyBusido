import React from "react";
import {addMessageAC, createNewMessageUserAC, DialogsType, MessagesType} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";

import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import { Dispatch } from "redux";

type mapStateToPropsType = {
    dialogs: DialogsType
    messages: MessagesType
    newMessageUserText: string
}
type mapDispatchToPropsType = {
    newMessageUser:(text: string) => void
    addMessage: () => void
}
export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType
let mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
        newMessageUserText: state.dialogPage.newMessageUser
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
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