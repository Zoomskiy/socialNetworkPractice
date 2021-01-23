import {ActionsTypesForProject} from "./ActionsTypesForProject";

const SET_USER_DATA = "SET_USER_DATA"

type AuthInitialState = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}


const initialState: AuthInitialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: ActionsTypesForProject): AuthInitialState => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

type setUserDataACType = {
    type: typeof SET_USER_DATA
    data: {userId: number, email: string, login: string}
}

export const setAuthUserData = (userId: number, email: string, login: string):setUserDataACType => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login}

    }as const
}
