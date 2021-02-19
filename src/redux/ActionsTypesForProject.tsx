import {AddPost, setStatus, setUserProfile,} from "./ProfileReducer";
import {SendMessage,} from "./DialogsReducer";
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

export type ActionsTypesForProject = ReturnType<typeof AddPost>
    | ReturnType<typeof SendMessage>
    | ReturnType<typeof setUserProfile> | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess> | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching> | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingProgress>
    | ReturnType<typeof setStatus>