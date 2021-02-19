import {SendMessage, } from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {rootReducer} from "../../redux/redux-store";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose, Dispatch} from "redux";




let mapStateToProps = (state: rootReducer) => {
    return {
        dialogsPage: state.dialogsProfile,
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(SendMessage(newMessageBody))
        }
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)