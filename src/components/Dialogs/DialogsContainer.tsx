import React from "react";
import {addMessageAC, DialogsType, MessagesType} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../withAuthRedirect";

type mapStateToPropsType = {
    dialogs: DialogsType
    messages: MessagesType
}
type mapDispatchToPropsType = {
    addMessage: (newMessage: string) => void
}
export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType
let mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addMessage: (newMessage: string) => {
            dispatch(addMessageAC(newMessage))
        }
    }
}

// export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs)

export const DialogsContainer =  compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs)
// the same
// let AuthRedirectComponent = withAuthRedirect(Dialogs)
// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)