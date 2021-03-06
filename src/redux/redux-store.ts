import {applyMiddleware, combineReducers, createStore} from "redux";
import {ContentActionCreatorTypes, contentReducer} from "./contentReducer";
import {dialogsReducer, DialogsReducerActionTypes} from "./dialogsReducer";
import {SideBarActionTypes, sideBarReducer} from "./sideBarReducer";
import {UsersReducer, UsersReducerTypesAC} from "./usersReducer";
import {authReducer, AuthActionTypes} from "./Auth-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import {ThunkAction} from 'redux-thunk'
import {InitializeActionTypes, initializeReducer} from "./AppReducer";

export type AppActionTypes = AuthActionTypes
    | ContentActionCreatorTypes
    | DialogsReducerActionTypes
    | SideBarActionTypes
    | UsersReducerTypesAC
    | InitializeActionTypes

let rootReducer = combineReducers({
    contentPage: contentReducer,
    dialogPage: dialogsReducer,
    sideBarPage: sideBarReducer,
    usersPage: UsersReducer,
    auth: authReducer,
    initialize: initializeReducer,
    form: formReducer
} as const)

export type AppStateType = ReturnType<typeof rootReducer>
let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
// @ts-ignore
window.store = store
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionTypes>
export default store