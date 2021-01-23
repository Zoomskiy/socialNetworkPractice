import { combineReducers, createStore } from "@reduxjs/toolkit"
import {DialogsReducer} from "./DialogsReducer";
import {ProfileReducer} from "./ProfileReducer";
import {usersReducer} from "./UsersReducer";
import {authReducer} from "./AuthReducer";


let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsProfile: DialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
    }
)

let store = createStore(reducers)

export type rootReducer = ReturnType<typeof reducers>

export default store