

export type UsersReducerTypesAC =ReturnType<typeof FollowAC>| ReturnType<typeof UnfollowAC>| ReturnType<typeof SetUsersAC>
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

const Users:UsersType = []


export const UsersReducer = (state:UsersType=Users,action:UsersReducerTypesAC):UsersType => {
    switch (action.type) {
        case "FOLLOW":
            return state.map((u)=>u.id===action.id?{...u,followed:true}:u)
        case "UNFOLLOW":
            return state.map((u)=>u.id===action.id?{...u,followed:false}:u)
        case "SET-USERS":
            return [...state,...action.usersState]
    }
    return state
}