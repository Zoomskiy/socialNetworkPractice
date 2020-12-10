import React from "react";
import p from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType ={
    state: ProfilePageType
    addPostCallback: (postMessage: string) => void
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.state.postData} addPost={props.addPostCallback}/>
        </div>
    )
}

export default Profile
