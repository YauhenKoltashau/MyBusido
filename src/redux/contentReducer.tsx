import {v1} from "uuid";
import {ActionCreatorReturnTypes} from "./redux-store";

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
export const contentReducer = (state = initialState, action: ActionCreatorReturnTypes) => {
    switch (action.type) {
        case "ADD-POST":
            // let copyAddPostState = {...state}
            // copyAddPostState.postsData = [...copyAddPostState.postsData, newPostsData]
            // // state.postsData.push(newPostsData)
            // copyAddPostState.newPostText = ''
            let newPostsData = {id: v1(), message: state.newPostText, likesCount: 0}
            return {...state,postsData: [...state.postsData,newPostsData],newPostText: ''}
        case "ADD-NEW-MESSAGE":
            // let copyAddNewMessageState = {...state}
            // copyAddNewMessageState.newPostText = action.newText
            return {...state,newPostText: action.newText}
        default:

            return state
    }
}