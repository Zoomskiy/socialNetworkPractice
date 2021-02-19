import React from "react";
import mp from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostDataType } from "../../../redux/state";
import  {reduxForm,Field} from "redux-form";

type MyPostsPropsType = {
    message: string
    postData: Array<PostDataType>
    onAddPost: (values: any) => void
}



export const MyPosts = React.memo( (props: MyPostsPropsType) => {
    let postsElements = props.postData.map(post => <Post message={post.message} likeCount={post.likesCount}
                                                         author={post.author} id={post.id}/>)
    const onAddPost =  (values: any) => {
        props.onAddPost(values.newPostText)
    }

    return (
        <div className={mp.postBlock}>
            <h3>My posts</h3>
            <ProfileAddNewPostForm onSubmit={onAddPost}/>
            <div className={mp.posts}>
                {postsElements}
            </div>

        </div>
    )
})

const AddNewPostForm = (props: any) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component="textarea"/>
            </div>
            <div>
                <button >Add post</button>
            </div>

        </form>
    )
}
const ProfileAddNewPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)
