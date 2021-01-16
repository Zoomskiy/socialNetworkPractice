import {DialogsPageType} from "./state";
import {v1} from "uuid";

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

export const DialogsReducer = (state = initialState, action: { type: string, body?: string }) => {
    let stateCopy = {...state}
    switch (action.type) {

        case "UPDATE-NEW-MESSAGE-BODY": {
            if(action.body) {
                stateCopy = {...state, newMessageBody: action.body}
            }
            return stateCopy
        }
        case "SEND-MESSAGE":
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

export const SendMessageAC = () => {
    return {
        type: "SEND-MESSAGE"
    } as const
}
export const UpdateNewMessageBodyAC = (text: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY", body: text
    } as const
}