import {v1} from "uuid";
import {ActionCreatorReturnTypes} from "./redux-store";

export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type PostsDataType = Array<PostType>
export type ContentPagePostsDataType = {
    postsData: PostsDataType
    newPostText: string
}

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const addNewMessageAC = (text: string) => {
    return {
        type: 'ADD-NEW-MESSAGE',
        newText: text
    } as const
}

const initialState: ContentPagePostsDataType = {
    postsData: [
        {id: v1(), message: "It's my first post", likesCount: 12},
        {id: v1(), message: "How are you!", likesCount: 3}
    ],
    newPostText: "my post works"
}

export const contentReducer = (state:ContentPagePostsDataType = initialState, action: ActionCreatorReturnTypes):ContentPagePostsDataType => {
    switch (action.type) {
        case "ADD-POST":
            let newPostsData = {id: v1(), message: state.newPostText, likesCount: 0}
            return {...state,postsData: [...state.postsData,newPostsData],newPostText: ''}
        case "ADD-NEW-MESSAGE":
            return {...state,newPostText: action.newText}
        default:

            return state
    }
}