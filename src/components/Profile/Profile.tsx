import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType ={
    state: ProfilePageType
    addPostCallback: (postMessage: string) => void
    changeTextArea: (newText: string) => void
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts changeTextAreaHandler={props.changeTextArea} message={props.state.messageForNewPost} postData={props.state.postData} addPost={props.addPostCallback}/>
        </div>
    )
}

export default Profile
