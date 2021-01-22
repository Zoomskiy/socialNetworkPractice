import {DialogsPageType} from "./state";
import {v1} from "uuid";
import {ActionsTypesForProject} from "./ActionsTypesForProject";

const SEND_MESSAGE = "SEND_MESSAGE"
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"

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

        case UPDATE_NEW_MESSAGE_BODY: {
            if(action.body) {
                stateCopy = {...state, newMessageBody: action.body}
            }
            return stateCopy
        }
        case SEND_MESSAGE:
            let body = state.newMessageBody
             stateCopy = {
                ...state,
                messagesData: [...state.messagesData, {id: v1(), message: body}],
                newMessageBody: ""
            }
            return stateCopy
        default:
            return state
    }
}

type SendMessageACType = {
    type: typeof SEND_MESSAGE
}
export const SendMessage = (): SendMessageACType => {
    return {
        type: SEND_MESSAGE
    } as const
}

type UpdateNewMessageBodyACType = {
    type: typeof UPDATE_NEW_MESSAGE_BODY, body: string

}
export const UpdateNewMessageBody = (body: string): UpdateNewMessageBodyACType => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,  body
    } as const
}