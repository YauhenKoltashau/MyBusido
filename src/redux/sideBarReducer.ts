import {v1} from "uuid";
import {AppActionsType} from "./redux-store";
export type SideBarType = {
    id: string
    name: string
}
const SIDE_BAR = "sideBarPage/SIDE-BAR"
export type SideBarPageType = Array<SideBarType>
export type SideBarActionTypes = ReturnType<typeof sideBarAC>
export  const sideBarAC = () => {
    return{
        type: SIDE_BAR
    } as const
}
let initialState = {
    sideBar: [
        {id: v1(), name: "Ivan"},
        {id: v1(), name: "Alesya"},
        {id: v1(), name: "Fedor"},

    ]
}
export const sideBarReducer = (state=initialState, action: AppActionsType) => {

    return state
}