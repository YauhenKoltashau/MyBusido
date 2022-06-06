

export type UsersReducerTypesAC =ReturnType<typeof FollowAC>
    | ReturnType<typeof UnfollowAC>
    | ReturnType<typeof SetUsersAC>
    | ReturnType<typeof SetTotalUsersAC>
    | ReturnType<typeof SetCurrentPageAC>
    | ReturnType<typeof setUsersOnPageAC>
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
export type initialStateType = {
    users: UsersType
    totalCount: number
    currentPageNumber: number
    usersOnPage: number
}

export const FollowAC = (id:number) =>{
    return{
        type: 'FOLLOW',
        id: id
    }as const
}
export const UnfollowAC = (id: number) =>{
    return{
        type: 'UNFOLLOW',
        id: id
    }as const
}
export const SetUsersAC = (users:UsersType) =>{
    return{
        type: 'SET-USERS',
        usersState:users
    }as const
}
export const SetTotalUsersAC = (totalUsers: number) => {
    return{
        type: 'SET-TOTAL-USERS',
        totalUsers: totalUsers
    }as const
}
export const SetCurrentPageAC = (pageNumber: number) => {
    return{
        type: 'SET-PAGE-NUMBER',
        pageNumber:pageNumber
    }as const
}
export const setUsersOnPageAC = (usersOn: number) => {
    return {
        type: 'SET-USERS-ON-PAGE',
        usersOn: usersOn
    }as const
}

const initialState: initialStateType = {
    users:[],
    totalCount:0,
    currentPageNumber:1,
    usersOnPage:10
}


export const UsersReducer = (state:initialStateType=initialState,action:UsersReducerTypesAC):initialStateType => {
    switch (action.type) {
        case "FOLLOW":
            // copyState = copyState,state.items=[...state.items].map((u)=>u.id===action.id?{...u,followed:true}:u)
            return {...state,users:[...state.users].map((u)=>u.id===action.id?{...u,followed:true}:u)}
        case "UNFOLLOW":
            return {...state,users:[...state.users].map((u) => u.id === action.id ? {...u, followed: false} : u)}
        case "SET-USERS":
            return {...state,users:action.usersState}
        case "SET-TOTAL-USERS":
            return {...state,totalCount:action.totalUsers}
        case "SET-PAGE-NUMBER":
            return {...state,currentPageNumber:action.pageNumber}
        case "SET-USERS-ON-PAGE":
            return {...state,usersOnPage:action.usersOn}


    }
    return state
}