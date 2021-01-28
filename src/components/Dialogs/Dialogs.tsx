import React, {ChangeEvent} from "react";
import d from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsDataType, DialogsPageType, MessagesDataType} from "../../redux/state";

type DialogsPropsType = {
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
    dialogsPage: DialogsPageType
}


const Dialogs = React.memo( (props: DialogsPropsType)=> {
    let dialogsElements = props.dialogsPage.dialogsData.map((dialog: DialogsDataType) => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.dialogsPage.messagesData.map((message:MessagesDataType) => <Message message={message.message} id={message.id}/>)
    let newMessageBody = props.dialogsPage.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea onChange={onNewMessageChange} value={newMessageBody} placeholder="Enter your message"> </textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}, )

export default Dialogs