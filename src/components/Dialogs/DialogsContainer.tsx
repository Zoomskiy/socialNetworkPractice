import React from "react";
import {SendMessageAC, UpdateNewMessageBodyAC} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

type DialogsContainerPropsType = {
    store: any
}

function DialogsContainer() {


    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState().dialogsProfile
                let onSendMessageClick = () => {
                    store.dispatch(SendMessageAC())
                }
                let onSendMessageChange = (body: string) => {
                    store.dispatch(UpdateNewMessageBodyAC(body))
                }
               return <Dialogs updateNewMessageBody={onSendMessageChange} SendMessage={onSendMessageClick} state={state}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer