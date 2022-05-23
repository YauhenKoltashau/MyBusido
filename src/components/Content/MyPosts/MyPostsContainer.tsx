import React from "react";
import {addNewMessageAC, addPostAC} from '../../../redux/contentReducer'
import {MyPosts} from "./MyPosts";
// import StoreContext from '../../../StoreContext'
import {connect} from "react-redux";
import {AppStateType, DispatchesType, PostDataContentType} from "../../../redux/redux-store";


// export const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {(store)=>{
//                 const postDataContentPage = store.getState().contentPage.postsData
//                 const addNewMessage = (text: string) => {
//                 store.dispatch(addNewMessageAC(text))
//             }
//
//                 const addPostOnClick = () => {
//                 store.dispatch(addPostAC())
//             }
//             return(
//                 <MyPosts
//                 addNewMessage={addNewMessage}
//                 addPostOnClick={addPostOnClick}
//                 postsData={postDataContentPage}
//                 newPostText={store.getState().contentPage.newPostText}
//                 />
//                 )
//             }}
//         </StoreContext.Consumer>
//
//
//     )
// }
type MapStatePropsType = {
    postsData: PostDataContentType
    newPostText: string
}

let mapStateToProps = (state:AppStateType): MapStatePropsType => {
    return{
        postsData: state.contentPage.postsData,
        newPostText: state.contentPage.newPostText
    }
}
let mapDispatchToProps = (dispatch: DispatchesType) => {
    return{
        addNewMessage:(text:string)=> {
            dispatch(addNewMessageAC(text))
        },
        addPostOnClick:()=>{
            dispatch(addPostAC())
        }
    }
}

export const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)