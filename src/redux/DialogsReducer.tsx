import {DialogsPageType} from "./state";
import {v1} from "uuid";
import {ActionsTypesForProject} from "./ActionsTypesForProject";

const SEND_MESSAGE = "SEND_MESSAGE"

let initialState: DialogsPageType = {
    messagesData: [
        {id: v1(), message: "Hello"},
        {id: v1(), message: "Hi"},
        {id: v1(), message: "Privet"}
    ],
    dialogsData: [
        {id: v1(), name: "Alex"},
        {id: v1(), name: "Dimitry"},
        {id: v1(), name: "Michael"}
    ],
    newMessageBody: ""
}

export const DialogsReducer = (state = initialState, action: ActionsTypesForProject) => {
    let stateCopy = {...state}
    switch (action.type) {

        case SEND_MESSAGE:
            let body = action.newMessageBody
             stateCopy = {
                ...state,
                messagesData: [...state.messagesData, {id: v1(), message: body}],
            }
            return stateCopy
        default:
            return state
    }
}

type SendMessageACType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}
export const SendMessage = (newMessageBody: string): SendMessageACType => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    } as const
}
