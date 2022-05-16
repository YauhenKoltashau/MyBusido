import {v1} from "uuid";
// import {addNewMessageAC, addPostAC, contentReducer} from "./contentReducer";
// import {addMessageAC, createNewMessageUserAC, dialogsReducer} from "./dialogsReducer";
// import {sideBarAC, sideBarReducer} from "./sideBarReducer";
//
//
// export type messagesType = {
//     id: string
//     message: string
// }
// export type postsDataType = {
//     id: string
//     message: string
//     likesCount: number
// }
// export type dialogsType = {
//     id: string
//     name: string
// }
// export type contentPageType = {
//     //newMessage: string
//     postsData: Array<postsDataType>
//     newPostText: string
// }
// export type dialogsPageType = {
//     dialogs: Array<dialogsType>,
//     messages: Array<messagesType>,
//     newMessageUser: string
// }
// export type sideBarType = {
//     id: string
//     name: string
// }
// export type sideBarPageType = {
//     sideBar: Array<sideBarType>
// }
// export type statePropsType = {
//     contentPage: contentPageType,
//     dialogsPage: dialogsPageType,
//     sideBarPage: sideBarPageType
// }
// export type storeType = {
//     _state: statePropsType
//     subscriber: (observer: () => void) => void
//     _callSubscriber: () => void
//     getState: () => statePropsType
//     dispatch: (action: ActionCreatorReturnTypes) => void
//
// }
// export type ActionCreatorReturnTypes = ReturnType<typeof addPostAC>
//     | ReturnType<typeof addNewMessageAC>
//     | ReturnType<typeof createNewMessageUserAC>
//     | ReturnType<typeof addMessageAC>
//     | ReturnType<typeof sideBarAC>
//
// export let store: storeType = {
//     _state: {
//         contentPage: {
//             postsData: [
//                 {id: v1(), message: "It's my first post", likesCount: 12},
//                 {id: v1(), message: "How are you!", likesCount: 3}
//             ],
//             newPostText: "my post works"
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: v1(), name: "Yauhen"},
//                 {id: v1(), name: "Irina"},
//                 {id: v1(), name: "Sergey"},
//                 {id: v1(), name: "Pavel"},
//                 {id: v1(), name: "Rolan"},
//                 {id: v1(), name: "Roman"},
//                 {id: v1(), name: "Igor"},
//                 {id: v1(), name: "Rustam"}
//             ],
//             messages: [
//                 {id: v1(), message: "Hi, man!"},
//                 {id: v1(), message: "How is your progress?"},
//                 {id: v1(), message: "Anyone be able to become a programmer"},
//             ],
//             newMessageUser: ""
//         },
//         sideBarPage: {
//             sideBar: [
//                 {id: v1(), name: "Ivan"},
//                 {id: v1(), name: "Alesya"},
//                 {id: v1(), name: "Fedor"},
//
//             ]
//         }
//     },
//     _callSubscriber() {
//     },
//     subscriber(observer) {
//         this._callSubscriber = observer
//     },
//     getState() {
//         return this._state
//     },
//     dispatch(action: ActionCreatorReturnTypes) {
//         this._state.contentPage = contentReducer(this._state.contentPage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.sideBarPage = sideBarReducer(this._state.sideBarPage, action)
//         this._callSubscriber()
//
//
//     },
//
// }
