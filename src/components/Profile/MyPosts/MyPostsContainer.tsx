import React from "react";
import {AddPostAC, UpdateNewPostTextAC} from "../../../redux/ProfileReducer";
import {MyPosts} from "./MyPosts";

type MyPostsContainerPropsType = {
    store: any
}



function MyPostsContainer(props: MyPostsContainerPropsType) {
    let state = props.store.getState()

    const addPost = () => {
        props.store.dispatch( AddPostAC())
    }

    const changeTextAreaHandler = (text: string) => {
        props.store.dispatch(UpdateNewPostTextAC(text))
    }

    return (
        <MyPosts updateNewPostText={changeTextAreaHandler} onAddPost={addPost} postData={state.profilePage.postData}
        message={state.profilePage.messageForNewPost}/>
    )
}

export default MyPostsContainer
