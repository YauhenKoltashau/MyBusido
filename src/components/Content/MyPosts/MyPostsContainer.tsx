import React from "react";
import {
    addPostAC,
    PostsDataType
} from '../../../redux/contentReducer'
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import { Dispatch } from "redux";

type mapStateToPropsType = {
    postsData: PostsDataType
}
type mapDispatchToPropsType = {
    addPost: (newPost: string) => void
}
export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        postsData: state.contentPage.postsData,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (newPost) => {
            dispatch(addPostAC(newPost))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)