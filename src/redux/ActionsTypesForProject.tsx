import {AddPost, setUserProfile, UpdateNewPostText} from "./ProfileReducer";
import {SendMessage, UpdateNewMessageBody} from "./DialogsReducer";
import {follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow} from "./UsersReducer";

export type ActionsTypesForProject = ReturnType<typeof AddPost> | ReturnType<typeof UpdateNewPostText>
    | ReturnType<typeof SendMessage> | ReturnType<typeof UpdateNewMessageBody>
    | ReturnType<typeof setUserProfile> | ReturnType<typeof follow>
    | ReturnType<typeof unfollow> | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>