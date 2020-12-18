import {v1} from "uuid";

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
    newMessageBody: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsProfile: DialogsPageType
}
export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = ReturnType<typeof AddPostAC> | ReturnType<typeof UpdateNewPostTextAC> | ReturnType<typeof SendMessageAC> | ReturnType<typeof UpdateNewMessageBodyAC>

export const AddPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}
export const UpdateNewPostTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT", newText: newText
    } as const

}
export const SendMessageAC = () => {
    return {
        type: "SEND-MESSAGE"
    } as const
}
export const UpdateNewMessageBodyAC = (text: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY", body: text
    } as const

}

let store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: "",
            postData: [
                {id: v1(), message: "Hello, it's me", likesCount: 10, author: "Alex"},
                {
                    id: v1(),
                    message: "I was wondering if after all these years you'd like to meet",
                    likesCount: 15,
                    author: "Alex"
                },
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
            ],
            newMessageBody: ""
        }
    },
    _callSubscriber() {

    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost: PostDataType = {
                id: v1(),
                message: this._state.profilePage.messageForNewPost,
                likesCount: 0,
                author: "Bob"
            }
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.messageForNewPost = ""
            this._callSubscriber()
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.messageForNewPost = action.newText
            this._callSubscriber()
        } else if (action.type === "UPDATE-NEW-MESSAGE-BODY"){
            this._state.dialogsProfile.newMessageBody = action.body
            this._callSubscriber()
        }else if (action.type === "SEND-MESSAGE"){
            let body = this._state.dialogsProfile.newMessageBody
            this._state.dialogsProfile.newMessageBody = ""
            this._state.dialogsProfile.messagesData.push({id: v1(), message:body})
            this._callSubscriber()
        }
    }
}


export default store