import {rootReducer} from "./redux-store";

export const getUsersData = (state: rootReducer) => {
    return state.usersPage.usersData
}
export const getPageSize = (state: rootReducer) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: rootReducer) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: rootReducer) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: rootReducer) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: rootReducer) => {
    return state.usersPage.followingInProgress
}
