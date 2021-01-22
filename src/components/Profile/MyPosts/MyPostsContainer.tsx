import {AddPost, UpdateNewPostText} from "../../../redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {StateType} from "../../../redux/state";


const mapStateToProps = (state: StateType) => {
    return {
        postData: state.profilePage.postData,
        message: state.profilePage.messageForNewPost
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(UpdateNewPostText(text))
        },
        onAddPost: () => {
            dispatch(AddPost())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
