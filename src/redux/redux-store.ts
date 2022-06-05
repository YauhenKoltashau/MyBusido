import {combineReducers, createStore} from "redux";
import {addNewMessageAC, addPostAC, contentReducer} from "./contentReducer";
import {addMessageAC, createNewMessageUserAC, dialogsReducer} from "./dialogsReducer";
import {sideBarAC, sideBarReducer} from "./sideBarReducer";
import {UsersReducer} from "./usersReducer";


export type ActionCreatorReturnTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof addNewMessageAC>
    | ReturnType<typeof createNewMessageUserAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof sideBarAC>

let rootReducer = combineReducers({
    contentPage: contentReducer,
    dialogPage: dialogsReducer,
    sideBarPage: sideBarReducer,
    usersPage: UsersReducer
} as const)

export type AppStateType = ReturnType<typeof rootReducer>
let store = createStore(rootReducer)

export default store