import React from "react";
import mp from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostDataType} from "../../../redux/state";

type MyPostsPropsType = {
    postData: Array<PostDataType>
    addPost: (postMessage: string) => void
}

function MyPosts(props: MyPostsPropsType) {
    let postsElements = props.postData.map(post => <Post message={post.message} likeCount={post.likesCount} author={post.author} id={post.id}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if(newPostElement.current) {
            props.addPost(newPostElement.current.value)
        }

        newPostElement.current.value = ""
    }



    return (
        <div className={mp.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}/>
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
