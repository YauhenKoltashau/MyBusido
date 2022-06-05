import {v1} from "uuid";
import {ActionCreatorReturnTypes} from "./redux-store";
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
    newMessageUser: string
}

export const createNewMessageUserAC = (text: string) => {
    return {
        type: 'ADD-NEW-MESSAGE-USER',
        newMessageUserText: text
    } as const
}

export const addMessageAC = () => ({type: 'ADD-MESSAGE'} as const)
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
        ],
        newMessageUser: ""
    }

export const dialogsReducer = (state:DialogsPageStateType=initialState, action: ActionCreatorReturnTypes):DialogsPageStateType => {
    switch (action.type) {
        case "ADD-NEW-MESSAGE-USER":
            return {...state,newMessageUser: action.newMessageUserText}
        case 'ADD-MESSAGE':
            const newMessageUser = {id: v1(), message: state.newMessageUser}
            return {...state,messages: [...state.messages,newMessageUser],newMessageUser: ''}
        default:
            return state
    }

}