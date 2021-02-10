import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {allDataProfileTypes} from "./ProfileContainer";

type ProfilePropsType = {
    profile: allDataProfileTypes
    status: string
    updateStatus: (status: string) => void
}


const Profile = React.memo((props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status = {props.status} updateStatus = {props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
})

export default Profile
