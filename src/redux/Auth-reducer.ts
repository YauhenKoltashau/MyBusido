import {securityAPI, userAPI} from "../api/api";
import {AppActionsType, AppThunkType} from "./redux-store";
import {stopSubmit} from "redux-form";

export type AuthType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    captchaUrl: string | null
}
const initialState: AuthType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null,
}
const SET_USER_DATA = "auth/SET-USER-DATA"
const SET_LOG_OUT = "auth/SET-LOGOUT"
const GET_CAPTCHA_URL_SUCCESS = "auth/GET-CAPTCHA-URL-SUCCESS"

export const setAuthUserThunk = (): AppThunkType => async (dispatch) => {
    let response = await userAPI.authMe()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}
export const logInThunk = (login: string, password: string, rememberMe: boolean, captcha: string ): AppThunkType => async (dispatch) => {
    let response = await userAPI.logIn(login, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserThunk())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrlThunk())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error!"
        dispatch(stopSubmit('login', {_error: message}))
    }
}
export const getCaptchaUrlThunk = (): AppThunkType => async (dispatch) => {
    const response = await securityAPI.getCaptcha()
    const captchaUrl = response.data.url
    dispatch(setCaptchaUrl(captchaUrl))
}


export const logoutThunk = (): AppThunkType => async (dispatch) => {
    let response = await userAPI.logOut()
    if (response.data.resultCode === 0) {
        dispatch(setLogOut(null, null, null, false))
        dispatch(setAuthUserThunk())
    }
}


export const authReducer = (state = initialState, action: AppActionsType): AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_LOG_OUT:
            return {
                ...state,
                ...action.payload
                // id: action.payload.id,
                // login: action.payload.login,
                // email: action.payload.email,
                // isAuth: action.payload.isAuth
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {...state, ...action.payload}
        default:
            return state
    }

}
export type AuthActionTypes =
    ReturnType<typeof setAuthUserData>
    | ReturnType<typeof setLogOut>
    | ReturnType<typeof setCaptchaUrl>
export const setAuthUserData = (id: number, login: string, email: string, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {id, login, email, isAuth}
}) as const
export const setLogOut = (id: null, login: null, email: null, isAuth: false) => ({
    type: SET_LOG_OUT,
    payload: {id, login, email, isAuth}
}) as const
export const setCaptchaUrl = (captchaUrl: string) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
}) as const
