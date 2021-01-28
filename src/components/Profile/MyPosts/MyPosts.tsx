import React, {ChangeEvent, useCallback} from "react";
import mp from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostDataType } from "../../../redux/state";

type MyPostsPropsType = {
    message: string
    postData: Array<PostDataType>
    updateNewPostText: (text: string) => void
    onAddPost: () => void
}



export const MyPosts = React.memo( (props: MyPostsPropsType) => {
    let postsElements = props.postData.map(post => <Post message={post.message} likeCount={post.likesCount}
                                                         author={post.author} id={post.id}/>)
    const onAddPost =  () => {
        props.onAddPost()
    }

    const changeTextAreaHandler =  (e : ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }
    return (
        <div className={mp.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.message} onChange={changeTextAreaHandler}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>

            </div>
            <div className={mp.posts}>
                {postsElements}
            </div>

        </div>
    )
})


