import {SendMessage, UpdateNewMessageBody} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {rootReducer} from "../../redux/redux-store";




let mapStateToProps = (state: rootReducer) => {
    return {
        dialogsPage: state.dialogsProfile,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(UpdateNewMessageBody(body))
        },
        sendMessage: () => {
            dispatch(SendMessage())
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer