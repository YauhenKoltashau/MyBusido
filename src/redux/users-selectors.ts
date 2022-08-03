import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";

const getUsersSelector = (state:AppStateType) => {
    return state.usersPage.users
}

export const getUsersSuperSelector = (state:AppStateType) => {
    return getUsersSelector(state).filter(u=>true)
}
export const getUsersReselector = createSelector(getUsersSelector,(users)=>{
    return users.filter(u=>true)
})
export const totalCountSelector = (state:AppStateType) => {
    return state.usersPage.totalCount
}
export const currentPageNumberSelector = (state:AppStateType) => {
    return state.usersPage.currentPageNumber
}
export const usersOnPageSelector = (state:AppStateType) => {
    return state.usersPage.usersOnPage
}
export const isFetchingSelector = (state:AppStateType) => {
    return state.usersPage.isFetching
}
export const isFollowingInProgressSelector = (state:AppStateType) => {
    return state.usersPage.isFollowingInProgress
}