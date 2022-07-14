import {v1} from "uuid";
import {profileAPI, userAPI} from "../api/api";
import {AppThunkType} from "./redux-store";

export type ContentActionCreatorTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof addNewMessageAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof setStatus>

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
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string | null,
        large: string | null
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
    profile: ProfileUserType
    currentStatus: string
}

export const addPostAC = (newPost:string) => ({type: 'ADD-POST', newPost} as const)
export const addNewMessageAC = (text: string) => {
    return {
        type: 'ADD-NEW-MESSAGE',
        newText: text
    } as const
}
export const setUserProfile = (profile: ProfileUserType) => {
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
export const setStatus = (status: string) => {
    return {
        type: 'SET-PROFILE-STATUS',
        status
    } as const
}

export const getUserByIdThunk = (userId: number):AppThunkType => {
    return (dispatch) => {
        userAPI.getUserById(userId).then(data => {
                dispatch(setUserProfile(data))
            }
        )
    }

}
export const getUserStatusThunk = (userId: number): AppThunkType => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response=> {
                dispatch(setStatus(response.data))

            }
        )
    }
}
export const updateStatusThunk = (status: string):AppThunkType => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if(data.resultCode === 0){
                dispatch(setStatus(status))
            }

            }
        )
    }

}


const initialState: ContentPageType = {
    postsData: [
        {id: v1(), message: "It's my first post", likesCount: 12},
        {id: v1(), message: "How are you!", likesCount: 3}
    ],
    profile: {
        aboutMe: '',
        contacts: {
            facebook: 'string',
            website: null,
            vk: '',
            twitter: '',
            instagram: '',
            youtube: null,
            github: '',
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 24371,
        photos: {
            small: null,
            large: null
        }
    },
    currentStatus: 'write your current status'


}

export const contentReducer = (state: ContentPageType = initialState, action: ContentActionCreatorTypes): ContentPageType => {
    switch (action.type) {
        case "ADD-POST":
            let newPostsData = {id: v1(), message: action.newPost, likesCount: 0}
            return {...state, postsData: [...state.postsData, newPostsData]}
        // case "ADD-NEW-MESSAGE":
        //     return {...state, newPostText: action.newText}
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-PROFILE-STATUS":
            return {...state,currentStatus: action.status}

        default:

            return state
    }
}