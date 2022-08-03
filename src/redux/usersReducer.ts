import {userAPI} from "../api/api";
import {AppActionsType, AppDispatch, AppThunkType} from "./redux-store";
import {AxiosPromise} from "axios";
import {updateObjectInArray} from "../utils/object-handler";

export type UsersReducerTypesAC = ReturnType<typeof followUser>
    | ReturnType<typeof unFollowUser>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setTotalUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setUsersOnPage>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof setFollowingInProgress>
export type UserType = {
    name: string
    id: number
    uniqueUrlName: null
    photos: {
        small: undefined | string | null,
        large: undefined | string | null
    }
    status: null,
    followed: boolean
}
export type UsersType = Array<UserType>
export type initialUsersStateType = {
    users: UsersType
    totalCount: number
    currentPageNumber: number
    usersOnPage: number
    isFetching: boolean
    isFollowingInProgress: number[]
}
const FOLLOW = 'userPage/FOLLOW'
const UNFOLLOW = 'userPage/UNFOLLOW'
const SET_USERS = 'userPage/SET-USERS'
const SET_TOTAL_USERS = 'userPage/SET-TOTAL-USERS'
const SET_PAGE_NUMBER = 'userPage/SET-PAGE-NUMBER'
const SET_USERS_ON_PAGE = 'userPage/SET-USERS-ON-PAGE'
const SET_IS_FETCHING = 'userPage/SET-IS-FETCHING'
const SET_FOLLOWING_IN_PROGRESS = 'userPage/SET-FOLLOWING-IN-PROGRESS'

export const followUser = (id: number) => ({type: FOLLOW, id: id} as const)
export const unFollowUser = (id: number) => ({type: UNFOLLOW, id: id} as const)
export const setUsers = (users: UsersType) => ({type: SET_USERS, usersState: users} as const)
export const setTotalUsers = (totalUsers: number) => ({type: SET_TOTAL_USERS, totalUsers: totalUsers} as const)
export const setCurrentPage = (pageNumber: number) => ({type: SET_PAGE_NUMBER, pageNumber: pageNumber} as const)
export const setUsersOnPage = (usersOn: number) => ({type: SET_USERS_ON_PAGE, usersOn: usersOn} as const)
export const setIsFetching = (isFetching: boolean) => ({type: SET_IS_FETCHING, isFetching: isFetching} as const)
export const setFollowingInProgress = (isFetching: boolean, id: number) => ({
    type: SET_FOLLOWING_IN_PROGRESS,
    isFetching,
    id
} as const)

export const initialUsersState: initialUsersStateType = {
    users: [],
    totalCount: 0,
    currentPageNumber: 1,
    usersOnPage: 30,
    isFetching: true,
    isFollowingInProgress: []
}
export const getUsers = (currentPageNumber: number, usersOnPage: number): AppThunkType => async dispatch => {
    dispatch(setIsFetching(true))
    let response = await userAPI.getUsers(currentPageNumber, usersOnPage)
    dispatch(setIsFetching(false))
    dispatch(setUsers(response.items))
    dispatch(setTotalUsers(response.totalCount)
    )
}
const followUnfollowFlow = async (dispatch: AppDispatch, userId: number, apiMethod: AxiosPromise, actionCreator: ReturnType<typeof followUser>
    | ReturnType<typeof unFollowUser>) => {
    dispatch(setFollowingInProgress(true, userId))
    try {
        let response = await apiMethod
        if (response.data.resultCode === 0) {
            dispatch(actionCreator)
        }
        dispatch(setFollowingInProgress(false, userId))
    } catch {
        throw Error
        dispatch(setFollowingInProgress(false, userId))
    }
}


export const followUserThunk = (userId: number): AppThunkType => dispatch => {
    followUnfollowFlow(dispatch, userId, userAPI.followUser(userId), followUser(userId))

    // dispatch(setFollowingInProgress(true, userId))
    // try{
    //     let response = await userAPI.followUser(userId)
    //     if (response.data.resultCode === 0) {
    //         dispatch(followUser(userId))
    //     }
    //     dispatch(setFollowingInProgress(false, userId))
    // }catch {
    //     throw Error
    //     dispatch(setFollowingInProgress(false, userId))
    // }

}
export const unFollowUserThunk = (userId: number): AppThunkType => dispatch => {
    followUnfollowFlow(dispatch, userId, userAPI.unFollowUser(userId), unFollowUser(userId))
    // dispatch(setFollowingInProgress(true, userId))
    // try {
    //     let response = await userAPI.unFollowUser(userId)
    //     if (response.data.resultCode === 0) {
    //         dispatch(unFollowUser(userId))
    //     }
    //     dispatch(setFollowingInProgress(false, userId))
    // } catch {
    //     throw Error
    //     dispatch(setFollowingInProgress(false, userId))
    // }
}

export const UsersReducer = (state: initialUsersStateType = initialUsersState, action: AppActionsType): initialUsersStateType => {
    switch (action.type) {
        case FOLLOW:
            // copyState = copyState,state.items=[...state.items].map((u)=>u.id===action.id?{...u,followed:true}:u)
            return {...state,
                users: updateObjectInArray(state.users, action.id,"id",{followed: true})}
                    // state.users.map((u) => u.id === action.id ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map((u) => u.id === action.id ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: action.usersState}
        case SET_TOTAL_USERS:
            return {...state, totalCount: action.totalUsers}
        case SET_PAGE_NUMBER:
            return {...state, currentPageNumber: action.pageNumber}
        case SET_USERS_ON_PAGE:
            return {...state, usersOnPage: action.usersOn}
        case SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case SET_FOLLOWING_IN_PROGRESS:
            // debugger
            return {
                ...state, isFollowingInProgress: action.isFetching
                    ? [...state.isFollowingInProgress, action.id]
                    : [...state.isFollowingInProgress.filter(id => id !== action.id)]

            }
    }
    return state
}