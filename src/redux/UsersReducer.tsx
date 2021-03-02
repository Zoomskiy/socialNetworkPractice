import {ActionsTypesForProject} from "./ActionsTypesForProject";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

type UsersLocationType = {
    country: string
    city: string
}
type UsersPhotoDataType = {
    small: string
    large: string
}
export type UsersDataType = {
    id: string
    photos: UsersPhotoDataType
    followed: boolean
    name: string
    status: string
    location: UsersLocationType
}
export type UsersType = {
    usersData: Array<UsersDataType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
}

const initialState: UsersType = {
    usersData: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []

}

export const usersReducer = (state = initialState, action: ActionsTypesForProject): UsersType => {

    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(el => {
                    if(el.id === action.userID) {
                        return {...el, followed: true}
                    }
                    return el;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(el => {
                    if(el.id === action.userID) {
                        return {...el, followed: false}
                    }
                    return el;
                })
            }
        case SET_USERS:
            return {...state, usersData: [...action.usersData]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }

        default:
            return state
    }
}


type followingIsFollowingProgressACType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: string
}
export const toggleFollowingProgress = (isFetching: boolean, userId: string): followingIsFollowingProgressACType => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    }
}

type followACType = {
    type: typeof FOLLOW
    userID: string
}
export const followSuccess = (userID: string): followACType => {
    return {
        type: FOLLOW,
        userID
    } as const
}

type unfollowACType = {
    type: typeof UNFOLLOW
    userID: string
}
export const unfollowSuccess = (userID: string): unfollowACType => {
    return {
        type: UNFOLLOW,
        userID
    } as const
}

type setUsersACType = {
    type: typeof SET_USERS
    usersData: Array<UsersDataType>
}
export const setUsers = (usersData: Array<UsersDataType>): setUsersACType => {
    return {
        type: SET_USERS,
        usersData
    } as const
}

type setCurrentPageACType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): setCurrentPageACType => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}

type setTotalUsersCountACType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountACType => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    } as const
}

type toggleIsFetchingACType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingACType => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}

export const requestUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}
export const follow = (userId: string) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}
export const unfollow = (userId: string) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}