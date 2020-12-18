import React, {ChangeEvent} from "react";
import d from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, DialogsPageType, SendMessageAC, UpdateNewMessageBodyAC} from "../../redux/state";

type DialogsPropsType = {
    state: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}


function Dialogs(props: DialogsPropsType) {
    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.state.messagesData.map(message => <Message message={message.message} id={message.id}/>)
    let newMessageBody = props.state.newMessageBody
    let onSendMessageClick = () => {
        props.dispatch(SendMessageAC())
    }
    let onSendMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.dispatch(UpdateNewMessageBodyAC(body))
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