import {applyMiddleware, combineReducers, createStore} from "redux";
import {ContentActionCreatorTypes, contentReducer} from "./contentReducer";
import {dialogsReducer, DialogsReducerActionTypes} from "./dialogsReducer";
import { SideBarActionTypes, sideBarReducer} from "./sideBarReducer";
import {UsersReducer, UsersReducerTypesAC} from "./usersReducer";
import {authReducer, AuthActionTypes} from "./Auth-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import {ThunkAction} from 'redux-thunk'

export type AppTypesAction = AuthActionTypes
    | ContentActionCreatorTypes
    | DialogsReducerActionTypes
    | SideBarActionTypes
    | UsersReducerTypesAC

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
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppTypesAction>
export default store