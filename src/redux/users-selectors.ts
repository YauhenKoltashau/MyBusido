import {AppStateType} from "./redux-store";

export const getUsersSelector = (state:AppStateType) => {
    return state.usersPage.users
}
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