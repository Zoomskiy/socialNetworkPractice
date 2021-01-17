
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

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
}

const initialState: UsersType = {
    usersData: []

}

export const usersReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(el => {
                    if (el.id === action.userID)  {
                        return {...el, followed: true}
                    }
                    return el;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(el => {
                    if (el.id === action.userID)  {
                        return {...el, followed: false}
                    }
                    return el;
                })
            }
        case SET_USERS:
            return {...state, usersData: [...state.usersData, ...action.usersData]}

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
