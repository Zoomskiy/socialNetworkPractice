import React, {ChangeEvent} from "react";
import d from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {SendMessageAC, UpdateNewMessageBodyAC} from "../../redux/DialogsReducer";
import {DialogsDataType, MessagesDataType} from "../../redux/state";

type DialogsPropsType = {
    store: any
}


function Dialogs(props: DialogsPropsType) {
    let state = props.store.getState().dialogsProfile
    let dialogsElements = state.dialogsData.map((dialog: DialogsDataType) => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = state.messagesData.map((message:MessagesDataType) => <Message message={message.message} id={message.id}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(SendMessageAC())
    }
    let onSendMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.store.dispatch(UpdateNewMessageBodyAC(body))
    }

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea onChange={onSendMessageChange} value={newMessageBody} placeholder="Enter your message"> </textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs