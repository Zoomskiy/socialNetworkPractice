import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, StoreType} from "../../redux/state";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType ={
    store: any
}

function Profile() {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile
