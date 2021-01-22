import {v1} from "uuid";
import {PostDataType, ProfilePageType} from "./state";
import {ActionsTypesForProject} from "./ActionsTypesForProject";
import {allDataProfileTypes} from "../components/Profile/ProfileContainer";

const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

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
    ],
    profile: null
}

export const ProfileReducer = (state = initialState, action: ActionsTypesForProject) => {

    switch (action.type) {
        case ADD_POST : {
            let newPost: PostDataType = {
                id: v1(),
                message: state.messageForNewPost,
                likesCount: 0,
                author: "Bob"
            }
            return{...state, postData: [...state.postData, newPost], messageForNewPost: ""}
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, messageForNewPost: action.newText}
        }
        case SET_USER_PROFILE: {
            return  {...state, profile: action.profile }
        }
        default:
            return state
    }
}


type AddPostACType = {
    type: typeof ADD_POST
}
export const AddPost = (): AddPostACType => {
    return {
        type: ADD_POST
    } as const
}

type UpdateNewPostTextACType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}
export const UpdateNewPostText = (newText: string): UpdateNewPostTextACType => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: newText
    } as const
}
type setUserProfileACType = {
    type: typeof SET_USER_PROFILE
    profile: any
}
export const setUserProfile = (profile: allDataProfileTypes): setUserProfileACType => {
    return {
        type: SET_USER_PROFILE, profile
    } as const
}