import React from "react";
import {SendMessageAC, UpdateNewMessageBodyAC} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";

type DialogsContainerPropsType = {
    store: any
}

function DialogsContainer(props: DialogsContainerPropsType) {
    let state = props.store.getState().dialogsProfile
    let onSendMessageClick = () => {
        props.store.dispatch(SendMessageAC())
    }
    let onSendMessageChange = (body: string) => {
        props.store.dispatch(UpdateNewMessageBodyAC(body))
    }

    return (
        <Dialogs updateNewMessageBody={onSendMessageChange} SendMessage={onSendMessageClick} state={state}/>
    )
}

export default DialogsContainer