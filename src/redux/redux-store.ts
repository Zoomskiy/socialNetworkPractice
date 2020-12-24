import { combineReducers, createStore } from "@reduxjs/toolkit"
import {DialogsReducer} from "./DialogsReducer";
import {ProfileReducer} from "./ProfileReducer";


let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsProfile: DialogsReducer
    }
)

let store = createStore(reducers)

export type rootReducer = ReturnType<typeof reducers>

export default store