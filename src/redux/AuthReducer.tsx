import {ActionsTypesForProject} from "./ActionsTypesForProject";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA"

type AuthInitialState = {
    id: string | null
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

    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

type setUserDataACType = {
    type: typeof SET_USER_DATA
    payload: { id: string | null, email: string | null, login: string | null, isAuth: boolean }
}

export const setAuthUserData = (id: string | null, email: string | null, login: string | null, isAuth: boolean): setUserDataACType => {
    return {
        type: SET_USER_DATA,
        payload: {id, email, login, isAuth}

    } as const
}
export const getAuthUserData = () => (dispatch: any) => {
    return authAPI.me()
        .then(response => {
            if(response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}
export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                dispatch(stopSubmit("login", {_error: message}))
            }
        })
}
export const logout = () => (dispatch: any) => {
    authAPI.logout()
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}
