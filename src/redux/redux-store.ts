import {combineReducers, createStore} from "redux";
import {contentReducer} from "./contentReducer";
import {addMessageAC, createNewMessageUserAC, dialogsReducer} from "./dialogsReducer";
import {sideBarAC, sideBarReducer} from "./sideBarReducer";
import {UsersReducer} from "./usersReducer";
import {authReducer} from "./Auth-reducer";


export type ActionCreatorReturnTypes = ReturnType<typeof createNewMessageUserAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof sideBarAC>

let rootReducer = combineReducers({
    contentPage: contentReducer,
    dialogPage: dialogsReducer,
    sideBarPage: sideBarReducer,
    usersPage: UsersReducer,
    auth: authReducer
} as const)

export type AppStateType = ReturnType<typeof rootReducer>
let store = createStore(rootReducer)

export default store