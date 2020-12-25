import React from "react";
import {AddPostAC, UpdateNewPostTextAC} from "../../../redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";

type MyPostsContainerPropsType = {
    store: any
}


function MyPostsContainer() {


    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState()

                const addPost = () => {
                    store.dispatch(AddPostAC())
                }

                const changeTextAreaHandler = (text: string) => {
                    store.dispatch(UpdateNewPostTextAC(text))
                }

                return <MyPosts updateNewPostText={changeTextAreaHandler} onAddPost={addPost}
                                postData={state.profilePage.postData}
                                message={state.profilePage.messageForNewPost}/>
            }

        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer
