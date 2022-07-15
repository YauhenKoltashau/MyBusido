import {userAPI} from "../api/api";
import {AppThunkType} from "./redux-store";
import {stopSubmit} from "redux-form";
export type AuthType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean,
}
const initialState: AuthType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}
export const setAuthUserThunk = ():AppThunkType => {
    return (dispatch) => {
       return userAPI.authMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setAuthUserData(id, login, email, true))
                }
            })
    }
}
export const logInThunk = (login:string, password: string, rememberMe:boolean ):AppThunkType => {
    return (dispatch) => {
        userAPI.logIn(login, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserThunk())
                } else {
                    let message = response.data.messages.length > 0? response.data.messages[0]:"some error!"
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    }
}
export const logoutThunk = ():AppThunkType => {
    return (dispatch) => {
        userAPI.logOut()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setLogOut(null,null,null,false))
                    dispatch(setAuthUserThunk())
                }
            })
    }
}

export const authReducer = (state = initialState, action: AuthActionTypes): AuthType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.payload

            }
        case "SET-LOGOUT"  :
            return {
                ...state,id: action.payload.id,login:action.payload.login,email:action.payload.email,isAuth:action.payload.isAuth
            }
        default:
            return state
    }

}
export type AuthActionTypes = ReturnType<typeof setAuthUserData> | ReturnType<typeof setLogOut>
export const setAuthUserData = (id: number, login: string, email: string, isAuth: boolean) => ({
    type: "SET-USER-DATA",
    payload: { id, login, email, isAuth }
}) as const
export const setLogOut = (id: null, login: null, email: null, isAuth: false) =>({
    type: "SET-LOGOUT",
    payload:{ id,login,email,isAuth }
})as const
