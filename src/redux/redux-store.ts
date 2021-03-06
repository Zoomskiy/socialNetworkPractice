import {applyMiddleware, combineReducers, createStore} from "@reduxjs/toolkit"
import {DialogsReducer} from "./DialogsReducer";
import {ProfileReducer} from "./ProfileReducer";
import {usersReducer} from "./UsersReducer";
import {authReducer} from "./AuthReducer";
import  thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {AppReducer} from "./AppReducer";


let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsProfile: DialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: AppReducer
    }
)

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export type rootReducer = ReturnType<typeof reducers>

export default store