import React from "react";
import {
    addNewMessageAC,
    addPostAC,
    PostsDataType
} from '../../../redux/contentReducer'
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import { Dispatch } from "redux";

type mapStateToPropsType = {
    postsData: PostsDataType
    newPostText: string
}
type mapDispatchToPropsType = {
    addNewMessage: (text: string) => void
    addPostOnClick: () => void
}
export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        postsData: state.contentPage.postsData,
        newPostText: state.contentPage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addNewMessage: (text: string) => {
            dispatch(addNewMessageAC(text))
        },
        addPostOnClick: () => {
            dispatch(addPostAC())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)