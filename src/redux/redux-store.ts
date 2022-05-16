import {combineReducers, createStore} from "redux";
import {addNewMessageAC, addPostAC, contentReducer} from "./contentReducer";
import {addMessageAC, createNewMessageUserAC, dialogsReducer} from "./dialogsReducer";
import {sideBarAC, sideBarReducer} from "./sideBarReducer";




export type ActionCreatorReturnTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof addNewMessageAC>
    | ReturnType<typeof createNewMessageUserAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof sideBarAC>
export type SideBarSideBarPage = ReturnType<typeof typeOfSideBarSideBarPage>
export type MessageType = ReturnType<typeof typeOfMessage>
export type PostType = ReturnType<typeof typeOfContentPostDataType>
export type DialogType = ReturnType<typeof typeOfDialogType>
export type PostDataContentType = ReturnType<typeof typeOfContentPostsDataType>
export type MessageDialogType = ReturnType<typeof typeOfDialogsMessage>
export type DialogsDialogType = ReturnType<typeof typeOfDialogsDialogs>
export type SideBarPageType = ReturnType<typeof typeOfSideBarPage>
export type DialogsPageType = ReturnType<typeof typeOfDialogsPage>
export type ContentPageType = ReturnType<typeof typeOfContentPage>
export type StatePropsType = ReturnType<typeof typeOfState>
export type StorePropsType = ReturnType<typeof typeOfStore>
let reducers = combineReducers({
    contentPage:contentReducer,
    dialogPage: dialogsReducer,
    sideBarPage: sideBarReducer
} as const)
let store = createStore(reducers)
const typeOfStore = ()=>store
const typeOfState = ()=>store.getState()
const typeOfContentPage = () => store.getState().contentPage
const typeOfDialogsPage = () => store.getState().dialogPage
const typeOfSideBarPage = () => store.getState().sideBarPage
const typeOfSideBarSideBarPage = () => store.getState().sideBarPage.sideBar
const typeOfDialogsDialogs = () => store.getState().dialogPage.dialogs
const typeOfDialogsMessage = () => store.getState().dialogPage.messages
const typeOfContentPostsDataType = () => store.getState().contentPage.postsData
const typeOfDialogType = () => store.getState().dialogPage.dialogs.find((e)=>e)
const typeOfContentPostDataType = () => store.getState().contentPage.postsData.find((e)=>e)
const typeOfMessage = () => store.getState().dialogPage.messages.find((e)=>e)



export default store