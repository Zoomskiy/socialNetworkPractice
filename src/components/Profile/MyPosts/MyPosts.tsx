import React, {ChangeEvent} from "react";
import mp from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ActionsTypes, PostDataType} from "../../../redux/state";

type MyPostsPropsType = {
    message: string
    postData: Array<PostDataType>
    dispatch: (action: ActionsTypes) => void
}

function MyPosts(props: MyPostsPropsType) {
    let postsElements = props.postData.map(post => <Post message={post.message} likeCount={post.likesCount}
                                                         author={post.author} id={post.id}/>)

    const addPost = () => {
        props.dispatch( {type:"ADD-POST" })
    }

    const changeTextAreaHandler = (e : ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: e.currentTarget.value})
    }

    return (
        <div className={mp.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.message} onChange={changeTextAreaHandler}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={mp.posts}>
                {postsElements}
            </div>

        </div>
    )
}

export default MyPosts
