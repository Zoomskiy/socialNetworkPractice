import {v1} from "uuid";
import {PostDataType, ProfilePageType} from "./state";

const initialState: ProfilePageType = {
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
}

export const ProfileReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case "ADD-POST" : {
            let newPost: PostDataType = {
                id: v1(),
                message: state.messageForNewPost,
                likesCount: 0,
                author: "Bob"
            }
            return{...state, postData: [...state.postData, newPost], messageForNewPost: ""}
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {...state, messageForNewPost: action.newText}
        }
        default:
            return state
    }
}

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