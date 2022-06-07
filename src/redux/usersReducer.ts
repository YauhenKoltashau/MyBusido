export type UsersReducerTypesAC = ReturnType<typeof followUser>
    | ReturnType<typeof unFollowUser>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setTotalUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setUsersOnPage>
    | ReturnType<typeof setIsFetching>
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
    isFetching: boolean
}

export const followUser = (id: number) => {
    return {
        type: 'FOLLOW',
        id: id
    } as const
}
export const unFollowUser = (id: number) => {
    return {
        type: 'UNFOLLOW',
        id: id
    } as const
}
export const setUsers = (users: UsersType) => {
    return {
        type: 'SET-USERS',
        usersState: users
    } as const
}
export const setTotalUsers = (totalUsers: number) => {
    return {
        type: 'SET-TOTAL-USERS',
        totalUsers: totalUsers
    } as const
}
export const setCurrentPage = (pageNumber: number) => {
    return {
        type: 'SET-PAGE-NUMBER',
        pageNumber: pageNumber
    } as const
}
export const setUsersOnPage = (usersOn: number) => {
    return {
        type: 'SET-USERS-ON-PAGE',
        usersOn: usersOn
    } as const
}
export const setIsFetching = (isFetching: boolean) => {
    return {
        type: 'SET-IS-FETCHING',
        isFetching: isFetching
    } as const
}

const initialState: initialStateType = {
    users: [],
    totalCount: 0,
    currentPageNumber: 1,
    usersOnPage: 30,
    isFetching: true
}


export const UsersReducer = (state: initialStateType = initialState, action: UsersReducerTypesAC): initialStateType => {
    switch (action.type) {
        case "FOLLOW":
            // copyState = copyState,state.items=[...state.items].map((u)=>u.id===action.id?{...u,followed:true}:u)
            return {...state, users: [...state.users].map((u) => u.id === action.id ? {...u, followed: true} : u)}
        case "UNFOLLOW":
            return {...state, users: [...state.users].map((u) => u.id === action.id ? {...u, followed: false} : u)}
        case "SET-USERS":
            return {...state, users: action.usersState}
        case "SET-TOTAL-USERS":
            return {...state, totalCount: action.totalUsers}
        case "SET-PAGE-NUMBER":
            return {...state, currentPageNumber: action.pageNumber}
        case "SET-USERS-ON-PAGE":
            return {...state, usersOnPage: action.usersOn}
        case "SET-IS-FETCHING":
            return {...state,isFetching:action.isFetching}


    }
    return state
}