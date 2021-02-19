import React from "react";
import d from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsDataType, DialogsPageType, MessagesDataType} from "../../redux/state";
import  {Field, reduxForm} from "redux-form";

type DialogsPropsType = {
    sendMessage: (newMessageBody: string) => void
    updateNewMessageBody: (body: string) => void
    dialogsPage: DialogsPageType
    isAuth: boolean
}


const Dialogs = React.memo((props: DialogsPropsType) => {
    let dialogsElements = props.dialogsPage.dialogsData.map((dialog: DialogsDataType) => <DialogItem name={dialog.name}
                                                                                                     id={dialog.id}/>)
    let messagesElements = props.dialogsPage.messagesData.map((message: MessagesDataType) => <Message
        message={message.message} id={message.id}/>)

    let addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
},)

const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name={"newMessageBody"} placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"}) (AddMessageForm)

export default Dialogs