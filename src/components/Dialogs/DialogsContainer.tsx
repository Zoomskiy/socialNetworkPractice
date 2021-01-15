import React from "react";
import {SendMessageAC, UpdateNewMessageBodyAC} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/state";


let mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsProfile
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(UpdateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(SendMessageAC())
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer