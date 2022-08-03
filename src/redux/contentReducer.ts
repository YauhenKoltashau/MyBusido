import {v1} from "uuid";
import {profileAPI, userAPI} from "../api/api";
import {AppActionsType, AppThunkType} from "./redux-store";

export type ContentActionCreatorTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePostAC>

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

const ADD_POST = 'content/ADD-POST'
const DELETE_POST = 'content/DELETE-POST'
const SET_USER_PROFILE = 'content/SET-USER-PROFILE'
const SET_IS_FETCHING = 'content/SET-IS-FETCHING'
const SET_PROFILE_STATUS = 'content/SET-PROFILE-STATUS'

export const addPostAC = (newPost:string) => ({type: ADD_POST, newPost} as const)
export const deletePostAC = (id: string) => ({type: DELETE_POST,id} as const)
export const setUserProfile = (profile: ProfileUserType) =>({type: SET_USER_PROFILE, profile: profile} as const)
export const setIsFetching = (isFetching: boolean) => ({type: SET_IS_FETCHING, isFetching: isFetching } as const)
export const setStatus = (status: string) => ({type: SET_PROFILE_STATUS, status} as const)

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
    debugger
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

export const contentReducer = (state: ContentPageType = initialState, action: AppActionsType): ContentPageType => {
    switch (action.type) {
        case ADD_POST:
            let newPostsData = {id: v1(), message: action.newPost, likesCount: 0}
            return {...state, postsData: [...state.postsData, newPostsData]}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_PROFILE_STATUS:
            return {...state,currentStatus: action.status}
        case DELETE_POST:
            return {...state,postsData: state.postsData.filter(p=>p.id !== action.id)}
        default:

            return state
    }
}