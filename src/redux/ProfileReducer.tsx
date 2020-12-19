import {v1} from "uuid";
import {PostDataType, ProfilePageType} from "./state";

export const ProfileReducer = (state: ProfilePageType, action: any) => {

    switch (action.type) {
        case "ADD-POST" :
            let newPost: PostDataType = {
                id: v1(),
                message: state.messageForNewPost,
                likesCount: 0,
                author: "Bob"
            }
            state.postData.push(newPost)
            state.messageForNewPost = ""
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.messageForNewPost = action.newText
            return state
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