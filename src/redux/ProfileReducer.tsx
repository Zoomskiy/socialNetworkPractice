import {v1} from "uuid";
import {PostDataType, ProfilePageType} from "./state";
import {ActionsTypesForProject} from "./ActionsTypesForProject";
import {allDataProfileTypes} from "../components/Profile/ProfileContainer";
import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";

const ADD_POST = "ADD_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

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
    profile: {
            aboutMe: "",
            contacts: {
                facebook:  null,
                website:  null,
                vk: `https://vk.com/id157339675`,
                twitter:  null,
                instagram: null,
                youtube:  null,
                github: `https://github.com/Zoomskiy?tab=overview&from=2021-01-01&to=2021-01-22`,
                mainLink:  null
            },
            lookingForAJob: true,
            lookingForAJobDescription: "looking for my first job as Frontend programmer",
            fullName: "Alexander Sindetckiy",
        userId: "13689",
            photos: {
                small: undefined,
                large: undefined
            }
        },
    status: "Sa"
}

export const ProfileReducer = (state = initialState, action: ActionsTypesForProject) => {
    switch (action.type) {
        case ADD_POST : {
            let newPost: PostDataType = {
                id: v1(),
                message: action.newPostText,
                likesCount: 0,
                author: "Bob"
            }
            return{...state, postData: [...state.postData, newPost], messageForNewPost: ""}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
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
    newPostText: string
}
export const AddPost = (newPostText: string): AddPostACType => {
    return {
        type: ADD_POST,
        newPostText
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
type setStatusACType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): setStatusACType => {
    return {
        type: SET_STATUS, status
    } as const
}
export const getUserProfile = (id: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(id)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}
export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    debugger
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}