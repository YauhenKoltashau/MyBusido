export type messagesType = {
    id: number
    message: string
}
export type postsDataType = {
    id: number
    message: string
    likesCount: number
}
export type dialogsType = {
    id: number
    name: string
}
export type contentPageType = {
    postsData: Array<postsDataType>
}
export type dialogsPageType = {
    dialogs: Array<dialogsType>,
    messages: Array<messagesType>
}
export type sideBarType = {
    id: number
    name: string
}
export type  sideBarPageType = {
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
            {id: 1, message: "It's my first post", likesCount: 12},
            {id: 1, message: "How are you!", likesCount: 3}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Yauhen"},
            {id: 2, name: "Irina"},
            {id: 3, name: "Sergey"},
            {id: 4, name: "Pavel"},
            {id: 5, name: "Rolan"},
            {id: 6, name: "Roman"},
            {id: 7, name: "Igor"},
            {id: 8, name: "Rustam"}
        ],
        messages: [
            {id: 1, message: "Hi, man!"},
            {id: 2, message: "How is your progress?"},
            {id: 3, message: "Anyone be able to become a programmer"}

        ]
    },
    sideBarPage: {
        sideBar: [
            {id: 1, name: "Ivan"},
            {id: 1, name: "Alesya"},
            {id: 1, name: "Fedor"},

        ]
    }
}