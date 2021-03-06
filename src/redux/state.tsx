
import {ActionsTypesForProject} from "./ActionsTypesForProject";
import {allDataProfileTypes} from "../components/Profile/ProfileContainer";

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
    profile: allDataProfileTypes
    status: string
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
    dispatch: (action: ActionsTypesForProject) => void
}


// let store: StoreType = {
//     _state: {
//         profilePage: {
//             messageForNewPost: "",
//             postData: [
//                 {id: v1(), message: "Hello, it's me", likesCount: 10, author: "Alex"},
//                 {
//                     id: v1(),
//                     message: "I was wondering if after all these years you'd like to meet",
//                     likesCount: 15,
//                     author: "Alex"
//                 },
//                 {id: v1(), message: "To go over everything", likesCount: 3, author: "Alex"},
//                 {id: v1(), message: "They say that time's supposed to heal ya", likesCount: 150, author: "Alex"},
//                 {id: v1(), message: "But I ain't done much healing", likesCount: 2000, author: "Alex"},
//             ],
//             profile: {
//                 aboutMe: "",
//                 contacts: {
//                     facebook:  null,
//                     website:  null,
//                     vk: `https://vk.com/id157339675`,
//                     twitter:  null,
//                     instagram: null,
//                     youtube:  null,
//                     github: `https://github.com/Zoomskiy?tab=overview&from=2021-01-01&to=2021-01-22`,
//                     mainLink:  null
//                 },
//                 lookingForAJob: true,
//                 lookingForAJobDescription: "looking for my first job as Frontend programmer",
//                 fullName: "Alexander Sindetckiy",
//                 userId: 13689,
//                 photos: {
//                     small: undefined,
//                     large: undefined
//                 }
//             }
//         },
//         dialogsProfile: {
//             messagesData: [
//                 {id: v1(), message: "Hello"},
//                 {id: v1(), message: "Hi"},
//                 {id: v1(), message: "Privet"}
//             ],
//             dialogsData: [
//                 {id: v1(), name: "Alex"},
//                 {id: v1(), name: "Dimitry"},
//                 {id: v1(), name: "Michael"}
//             ],
//             newMessageBody: ""
//         }
//     },
//     _callSubscriber() {
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//     dispatch(action) {
//        this._state.profilePage = ProfileReducer(this._state.profilePage, action)
//        this._state.dialogsProfile = DialogsReducer(this._state.dialogsProfile, action)
//        this._callSubscriber()
//     }
// }


// export default store