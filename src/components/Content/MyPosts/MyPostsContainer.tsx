import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import React, {ChangeEvent} from "react";
import {ActionCreatorReturnTypes, PostDataContentType} from "../../../redux/redux-store";
import {addNewMessageAC, addPostAC} from '../../../redux/contentReducer'
import {MyPosts} from "./MyPosts";
import StoreContext from './../../../StoreContext'

type postsMyPostsType = {
    postsData: PostDataContentType
    // callBack: (newPost: string) => void
    // newMessage: string
    dispatch: (action:ActionCreatorReturnTypes) => void
    newPostText: string

}


export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store)=>{
                const postsData = store.getState().contentPage.postsData
                const postDataContentPage = postsData
                const addNewMessage = (text: string) => {
                store.dispatch(addNewMessageAC(text))
            }

                const addPostOnClick = () => {
                store.dispatch(addPostAC())
            }
            return(
                <MyPosts
                addNewMessage={addNewMessage}
                addPostOnClick={addPostOnClick}
                postsData={postDataContentPage}
                newPostText={store.getState().contentPage.newPostText}
                />
                )
            }}
        </StoreContext.Consumer>


    )
}