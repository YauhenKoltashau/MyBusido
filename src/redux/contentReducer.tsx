import {v1} from "uuid";
import {ActionCreatorReturnTypes, PostType} from "./redux-store";

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const addNewMessageAC = (text: string) => {
    return {
        type: 'ADD-NEW-MESSAGE',
        newText: text
    } as const
}
let initialState = {
        postsData: [
            {id: v1(), message: "It's my first post", likesCount: 12},
            {id: v1(), message: "How are you!", likesCount: 3}
        ],
        newPostText: "my post works"
    }
export const contentReducer = (state=initialState, action: ActionCreatorReturnTypes) => {
    switch (action.type) {
        case "ADD-POST":
            const newPostsData: PostType = {id: v1(), message: state.newPostText, likesCount: 0}
            state.postsData.push(newPostsData)
            state.newPostText = ''
            return state
        case "ADD-NEW-MESSAGE":
            state.newPostText = action.newText
            return state
        default:

            return state
    }
}