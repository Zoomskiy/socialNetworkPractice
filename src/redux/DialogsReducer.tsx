import {v1} from "uuid";


export const DialogsReducer = (state:any, action:any) => {

    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body
            return state
        case "SEND-MESSAGE":
            let body = state.newMessageBody
            state.newMessageBody = ""
            state.messagesData.push({id: v1(), message:body})
            return state
        default: return state
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