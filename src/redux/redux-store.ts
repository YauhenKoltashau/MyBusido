import {applyMiddleware, combineReducers, createStore} from "redux";
import {contentReducer} from "./contentReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sideBarAC, sideBarReducer} from "./sideBarReducer";
import {UsersReducer} from "./usersReducer";
import {authReducer} from "./Auth-reducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'


export type ActionCreatorReturnTypes = ReturnType<typeof sideBarAC>

let rootReducer = combineReducers({
    contentPage: contentReducer,
    dialogPage: dialogsReducer,
    sideBarPage: sideBarReducer,
    usersPage: UsersReducer,
    auth: authReducer,
    form: formReducer
} as const)

export type AppStateType = ReturnType<typeof rootReducer>
let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
// @ts-ignore
window.store = store

export default store