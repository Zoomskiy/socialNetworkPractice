import React from "react";
import d from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsDataType, DialogsPageType, MessagesDataType} from "../../redux/state";

type DialogsPropsType = {
    state: DialogsPageType
}


function Dialogs(props: DialogsPropsType) {
    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.state.messagesData.map(message => <Message message={message.message} id={message.id}/>)

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs