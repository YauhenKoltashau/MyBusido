import {v1} from "uuid";
import {
    ActionCreatorReturnTypes
} from "./redux-store";
export  const sideBarAC = () => {
    return{
        type: "SIDE-BAR"
    } as const
}
let initialState = {
    sideBar: [
        {id: v1(), name: "Ivan"},
        {id: v1(), name: "Alesya"},
        {id: v1(), name: "Fedor"},

    ]
}
export const sideBarReducer = (state=initialState, action: ActionCreatorReturnTypes) => {

    return state
}