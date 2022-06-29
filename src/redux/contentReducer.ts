import {v1} from "uuid";

export type ContentActionCreatorTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof addNewMessageAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setIsFetching>
export type ProfileUserType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: null,
        github: string,
        mainLink: null
    },
    lookingForAJob: true,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}
export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type PostsDataType = Array<PostType>
export type ContentPageType = {
    postsData: PostsDataType
    newPostText: string
    profile: ProfileUserType
}

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const addNewMessageAC = (text: string) => {
    return {
        type: 'ADD-NEW-MESSAGE',
        newText: text
    } as const
}
export const setUserProfile = (profile: ProfileUserType) => {
    console.log(profile)
    return {
        type: 'SET-USER-PROFILE',
        profile: profile
    } as const
}
export const setIsFetching = (isFetching: boolean) => {
    return {
        type: 'SET-IS-FETCHING',
        isFetching: isFetching
    } as const
}

const initialState: ContentPageType = {
    postsData: [
        {id: v1(), message: "It's my first post", likesCount: 12},
        {id: v1(), message: "How are you!", likesCount: 3}
    ],
    newPostText: "my post works",
    profile:<ProfileUserType> {}


}

export const contentReducer = (state: ContentPageType = initialState, action: ContentActionCreatorTypes): ContentPageType => {
    switch (action.type) {
        case "ADD-POST":
            let newPostsData = {id: v1(), message: state.newPostText, likesCount: 0}
            return {...state, postsData: [...state.postsData, newPostsData], newPostText: ''}
        case "ADD-NEW-MESSAGE":
            return {...state, newPostText: action.newText}
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}

        default:

            return state
    }
}