import {v1} from "uuid";
import {AppActionsType} from "./redux-store";

export type MessageType = {
    id: string
    message: string
}
export type MessagesType = Array<MessageType>
export type DialogType = {
    id: string
    name: string
}
export type DialogsType = Array<DialogType>
export type DialogsPageStateType = {
    dialogs:DialogsType
    messages:MessagesType

}
const ADD_MESSAGE = 'dialogs/ADD-MESSAGE'

export const addMessageAC = (newMessage: string) => ({type: ADD_MESSAGE, newMessage} as const)
let initialState:DialogsPageStateType = {
        dialogs: [
            {id: v1(), name: "Yauhen"},
            {id: v1(), name: "Irina"},
            {id: v1(), name: "Sergey"},
            {id: v1(), name: "Pavel"},
            {id: v1(), name: "Rolan"},
            {id: v1(), name: "Roman"},
            {id: v1(), name: "Igor"},
            {id: v1(), name: "Rustam"}
        ],
        messages: [
            {id: v1(), message: "Hi, man!"},
            {id: v1(), message: "How is your progress?"},
            {id: v1(), message: "Anyone be able to become a programmer"},
        ]
    }
export type DialogsReducerActionTypes = ReturnType<typeof addMessageAC>
export const dialogsReducer = (state:DialogsPageStateType=initialState, action: AppActionsType):DialogsPageStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessageUser = {id: v1(), message: action.newMessage}
            return {...state,messages: [...state.messages,newMessageUser]}
        default:
            return state
    }

}