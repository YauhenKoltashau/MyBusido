import {Dispatch} from "redux";
import {userAPI} from "../api/api";

export type AuthType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}
const initialState: AuthType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}
export const setAuthUserThunk = () => {
    return (dispatch: Dispatch) => {
        userAPI.authMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setAuthUserData(id, login, email))
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
        default:
            return state
    }

}
export type setAuthUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id: number, login: string, email: string) => ({
    type: "SET-USER-DATA",
    data: {id, login, email}
})