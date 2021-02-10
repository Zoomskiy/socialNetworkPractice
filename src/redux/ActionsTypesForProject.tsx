import {AddPost, setStatus, setUserProfile, UpdateNewPostText} from "./ProfileReducer";
import {SendMessage, UpdateNewMessageBody} from "./DialogsReducer";
import {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress,
    toggleIsFetching,
    unfollowSuccess
} from "./UsersReducer";
import {setAuthUserData} from "./AuthReducer";

export type ActionsTypesForProject = ReturnType<typeof AddPost> | ReturnType<typeof UpdateNewPostText>
    | ReturnType<typeof SendMessage> | ReturnType<typeof UpdateNewMessageBody>
    | ReturnType<typeof setUserProfile> | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess> | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching> | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingProgress>
    | ReturnType<typeof setStatus>