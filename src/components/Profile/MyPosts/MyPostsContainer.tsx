import {AddPost} from "../../../redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {StateType} from "../../../redux/state";
import {Dispatch} from "redux";


const mapStateToProps = (state: StateType) => {
    return {
        postData: state.profilePage.postData,
        message: state.profilePage.messageForNewPost
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onAddPost: (newPostText: string) => {
            dispatch(AddPost(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
