import {SendMessage, UpdateNewMessageBody} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {rootReducer} from "../../redux/redux-store";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {Dispatch} from "redux";




let mapStateToProps = (state: rootReducer) => {
    return {
        dialogsPage: state.dialogsProfile,
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(UpdateNewMessageBody(body))
        },
        sendMessage: () => {
            dispatch(SendMessage())
        }
    }
}

let AuthRedirectComponent =  withAuthRedirect(Dialogs)


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer