import React from "react";
import {addMessageAC, createNewMessageUserAC, DialogsType, MessagesType} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../withAuthRedirect";

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
        newMessageUserText: state.dialogPage.newMessageUser,
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

// export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs)

export const DialogsContainer =  compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs)
// the same
// let AuthRedirectComponent = withAuthRedirect(Dialogs)
// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)