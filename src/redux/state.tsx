import {v1} from "uuid";

let renderTree = () => {

}

export type PostDataType = {
    id: string
    message: string
    likesCount: number
    author: string
}
export type DialogsDataType = {
    id: string
    name: string
}
export type MessagesDataType = {
    id: string
    message: string
}
export type ProfilePageType = {
    messageForNewPost: string
    postData: Array<PostDataType>
}
export type DialogsPageType = {
    messagesData: Array<MessagesDataType>
    dialogsData: Array<DialogsDataType>
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsProfile:DialogsPageType
}

let state: StateType = {
    profilePage: {
        messageForNewPost: "",
        postData: [
            {id: v1(), message: "Hello, it's me", likesCount: 10, author: "Alex"},
            {id: v1(), message: "I was wondering if after all these years you'd like to meet", likesCount: 15, author: "Alex"},
            {id: v1(), message: "To go over everything", likesCount: 3, author: "Alex"},
            {id: v1(), message: "They say that time's supposed to heal ya", likesCount: 150, author: "Alex"},
            {id: v1(), message: "But I ain't done much healing", likesCount: 2000, author: "Alex"},
        ]
    },
    dialogsProfile: {
        messagesData: [
            {id: v1(), message: "Hello"},
            {id: v1(), message: "Hi"},
            {id: v1(), message: "Privet"}
        ],
        dialogsData: [
            {id: v1(), name: "Alex"},
            {id: v1(), name: "Dimitry"},
            {id: v1(), name: "Michael"}
        ]
    }
}
export let changeTextArea = (newText: string) => {
    state.profilePage.messageForNewPost = newText
    renderTree()
}

export let addPost = () => {
    let newPost: PostDataType = {
        id: v1(),
        message: state.profilePage.messageForNewPost,
        likesCount: 0,
        author: "Bob"
    }
    state.profilePage.postData.push(newPost)
    state.profilePage.messageForNewPost = ""
    renderTree()
}

export const subscribe = (observer: () => void) => {
    renderTree = observer;
}

export default state