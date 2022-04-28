import {v1} from "uuid";


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
    newPostText: string
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
export type storeType = {
    _state: statePropsType
    subscriber: (observer: () => void) => void
    addNewMessage: () => void
    updateNewPostText: (newText: string) => void
    renderEntireState: () => void
    getState: () => statePropsType
    // getSubscriber: (observer: () => void) => void
    // getAddNewMessage: () => void
    // getUpdateNewPostText: (newText: string) => void


}

export const state = {
    contentPage: {
        postsData: [
            {id: v1(), message: "It's my first post", likesCount: 12},
            {id: v1(), message: "How are you!", likesCount: 3}
        ],
        newPostText: "my post doesn't work"
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

export let store: storeType = {
    _state: {
        contentPage: {
            postsData: [
                {id: v1(), message: "It's my first post", likesCount: 12},
                {id: v1(), message: "How are you!", likesCount: 3}
            ],
            newPostText: "my post doesn't work"
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
    },
    subscriber(observer) {
        this.renderEntireState = observer
    },
    addNewMessage() {

        const newPostsData: postsDataType = {id: v1(), message: state.contentPage.newPostText, likesCount: 0}
        this._state.contentPage.postsData.push(newPostsData)
        this._state.contentPage.newPostText = ''
        this.renderEntireState()
    },
    updateNewPostText(newText: string) {

        this._state.contentPage.newPostText = newText
        this.renderEntireState()
    },
    renderEntireState() {
    },
    getState () {
        return this._state
    }

}


// let renderEntireState = () => {}


// export const addNewMessage = () => {
//
//     const newPostsData: postsDataType = {id:v1(), message: state.contentPage.newPostText, likesCount: 0}
//     state.contentPage.postsData.push(newPostsData)
//     state.contentPage.newPostText = ''
//     renderEntireState()
//
// }
//  export const updateNewPostText = (newText: string) => {
//
//      state.contentPage.newPostText = newText
//      renderEntireState()
//
//  }

// export const subscriber = (observer:()=>void) => {
//     console.log("subscriber")
//
//     renderEntireState = observer
//
// }