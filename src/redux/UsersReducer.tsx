const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"

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
}

const initialState: UsersType = {
    usersData: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1

}

export const usersReducer = (state = initialState, action: any) => {

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

        default:
            return state
    }
}

export const followAC = (userID: string) => {
    return {
        type: FOLLOW,
        userID
    } as const
}
export const unFollowAC = (userID: string) => {
    return {
        type: UNFOLLOW,
        userID
    } as const
}
export const setUsersAC = (usersData: Array<UsersDataType>) => {
    return {
        type: SET_USERS,
        usersData
    }
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    }
}
