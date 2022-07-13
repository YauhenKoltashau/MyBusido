import {v1} from "uuid";

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


export const addMessageAC = (newMessage: string) => ({type: 'ADD-MESSAGE', newMessage} as const)
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
export const dialogsReducer = (state:DialogsPageStateType=initialState, action: DialogsReducerActionTypes):DialogsPageStateType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessageUser = {id: v1(), message: action.newMessage}
            return {...state,messages: [...state.messages,newMessageUser]}
        default:
            return state
    }

}