import {AppThunkType} from "./redux-store";
import {setAuthUserThunk} from "./Auth-reducer";

type initializedStateType = {
    isInitialized: boolean
    globalError: null | string

}
const initializedState: initializedStateType = {
    isInitialized: false,
    globalError: null
}

const INITIALIZE_APP = "APP/INITIALIZE-APP"
const SET_GLOBAL_ERROR = "APP/SET_GLOBAL_ERROR"

export const initializeAppThunk = (): AppThunkType => (dispatch) => {
    let promise = dispatch(setAuthUserThunk())
    Promise.all([promise]).then(() => {
        dispatch(initializeAppCreator())
    })
    // let promise1 = new Promise(resolve => resolve(dispatch(setAuthUserThunk())))
    // promise1.then(() => {
    //     dispatch(initializeAppCreator())
    // })
}
export const globalErrorThunk = (error: string): AppThunkType => (dispatch) => {
        dispatch(setGlobalAppError(error))
    setTimeout(()=>{
        dispatch(setGlobalAppError(null))
    }, 3000)
}


export const initializeReducer = (state = initializedState, action: InitializeActionTypes): initializedStateType => {
    switch (action.type) {
        case INITIALIZE_APP:
            return {
                ...state,
                isInitialized: true
            }
        case SET_GLOBAL_ERROR:
            return {
                ...state, globalError: action.error
            }
        default:
            return state
    }

}

export type InitializeActionTypes =
    | ReturnType<typeof initializeAppCreator>
    | ReturnType<typeof setGlobalAppError>
export const initializeAppCreator = () => ({
    type: INITIALIZE_APP,
})as const
export const setGlobalAppError = (error: string| null) => ({
    type: SET_GLOBAL_ERROR,
    error
}) as const
