const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

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
}

const initialState: UsersType = {
    usersData: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false

}

export const usersReducer = (state = initialState, action: ActionsTypes): UsersType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(el => {
                    if (el.id === action.userID) {
                        return {...el, followed: true}
                    }
                    return el;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(el => {
                    if (el.id === action.userID) {
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

        default:
            return state
    }
}



type ActionsTypes = followACType | unfollowACType | setUsersACType | setCurrentPageACType | setTotalUsersCountACType | toggleIsFetchingACType;
type followACType = {
    type: typeof FOLLOW
    userID: string
}
export const follow = (userID: string): followACType => {
    return {
        type: FOLLOW,
        userID
    } as const
}

type unfollowACType = {
    type: typeof UNFOLLOW
    userID: string
}
export const unfollow = (userID: string): unfollowACType => {
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
    return  {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }as const
}

