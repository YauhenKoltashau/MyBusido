import {renderEntireState} from "../rerender";
import {v1} from "uuid";
import {useState} from "react";

export type messagesType = {
    id: string
    message: string
}
export type postsDataType = {
    id: string
    message: string
    likesCount: number
}
export type dialogsType = {
    id: string
    name: string
}
export type contentPageType = {
    //newMessage: string
    postsData: Array<postsDataType>
}
export type dialogsPageType = {
    dialogs: Array<dialogsType>,
    messages: Array<messagesType>
}
export type sideBarType = {
    id: string
    name: string
}
export type sideBarPageType = {
    sideBar: Array<sideBarType>
}
export type statePropsType = {
    contentPage: contentPageType,
    dialogsPage: dialogsPageType,
    sideBarPage: sideBarPageType
}

export const state = {
        contentPage: {
            postsData: [
                {id: v1(), message: "It's my first post", likesCount: 12},
                {id: v1(), message: "How are you!", likesCount: 3}
            ]
        },
        dialogsPage: {
            dialogs: [
                {id: v1(), name: "Yauhen"},
                {id: v1(), name: "Irina"},
                {id: v1(), name: "Sergey"},
                {id: v1(), name: "Pavel"},
                {id: v1(), name: "Rolan"},
                {id: v1(), name: "Roman"},
                {id: v1(), name: "Igor"},
                {id: v1(), name: "Rustam"}
            ],
            messages: [
                {id: v1(), message: "Hi, man!"},
                {id: v1(), message: "How is your progress?"},
                {id: v1(), message: "Anyone be able to become a programmer"}

            ]
        },
        sideBarPage: {
            sideBar: [
                {id: v1(), name: "Ivan"},
                {id: v1(), name: "Alesya"},
                {id: v1(), name: "Fedor"},

            ]
        }
    }




 export const addNewMessage = (newText: string) => {
     const newPostsData: postsDataType = {id:v1(), message: newText, likesCount: 0}
     state.contentPage.postsData.push(newPostsData)
     renderEntireState(state)

 }