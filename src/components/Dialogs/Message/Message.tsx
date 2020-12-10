import React from "react";
import d from "./../Dialogs.module.css"

type MessageType = {
    message: string
    id: string
}

const Message: React.FC<MessageType> = (props => {
    return (
        <div className={d.message}>{props.message}</div>
    )
})

export default Message