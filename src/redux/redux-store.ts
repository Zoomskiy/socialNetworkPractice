import { combineReducers, createStore } from "@reduxjs/toolkit"
import {DialogsReducer} from "./DialogsReducer";
import {ProfileReducer} from "./ProfileReducer";


let reducers = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer
    }
)

type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>


let store = createStore(reducers)

export default store