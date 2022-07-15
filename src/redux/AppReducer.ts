import {AppStateType} from "./redux-store";
import {setAuthUserThunk} from "./Auth-reducer";
import {ThunkAction} from "redux-thunk";

type initializedStateType = {
    isInitialized: boolean

}
const initializedState = {
    isInitialized: false,
}

export const initializeAppThunk = ():ThunkAction<void, AppStateType, unknown, InitializeActionTypes> => (dispatch) => {
    let promise = dispatch(setAuthUserThunk())
    Promise.all([promise]).then(() => {
        dispatch(initializeAppCreator())})
    // let promise1 = new Promise(resolve => resolve(dispatch(setAuthUserThunk())))
    // promise1.then(() => {
    //     dispatch(initializeAppCreator())
    // })

}

export const initializeReducer = (state = initializedState, action: InitializeActionTypes): initializedStateType => {
    switch (action.type) {
        case "INITIALIZE-APP":
            return {
                ...state,
                isInitialized: true
            }
        default:
            return state
    }

}

export type InitializeActionTypes = ReturnType<typeof initializeAppCreator>
export const initializeAppCreator = () => ({
    type: "INITIALIZE-APP",
})
