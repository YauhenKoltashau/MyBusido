import React from "react";
import {addNewMessageAC, addPostAC} from '../../../redux/contentReducer'
import {MyPosts} from "./MyPosts";
import StoreContext from '../../../StoreContext'


export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store)=>{
                const postDataContentPage = store.getState().contentPage.postsData
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