import {Dispatch} from "redux";
import {userAPI} from "../api/api";

export type AuthType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean,
    isLogged: boolean
}
const initialState: AuthType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isLogged: false
}
export const setAuthUserThunk = () => {
    debugger
    return (dispatch: Dispatch) => {
        userAPI.authMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setAuthUserData(id, login, email))
                    dispatch(setLogged(true))
                }
            })
    }
}
export const logInThunk = (login:string, password: string, rememberMe:boolean ) => {
    return (dispatch: Dispatch) => {
        userAPI.logIn(login, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setLogged(true))
                    setAuthUserThunk()
                }
            })
    }
}
export const logoutThunk = () => {
    debugger
    return (dispatch: Dispatch) => {
        userAPI.logOut()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setLogged(false))
                    setAuthUserThunk()
                }
            })
    }
}

export const authReducer = (state = initialState, action: setAuthUserDataType): AuthType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case "LOGIN":
            return {
                ...state,isLogged: action.isLogged
            }
        default:
            return state
    }

}
export type setAuthUserDataType = ReturnType<typeof setAuthUserData> | ReturnType<typeof setLogged>
export const setAuthUserData = (id: number, login: string, email: string) => ({
    type: "SET-USER-DATA",
    data: {id, login, email}
}) as const
export const setLogged = (isLogged:boolean) => ({
    type: "LOGIN",
    isLogged
}) as const

