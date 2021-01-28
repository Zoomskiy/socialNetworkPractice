import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {allDataProfileTypes} from "./ProfileContainer";

type ProfilePropsType = {
    profile: allDataProfileTypes
}


const Profile = React.memo((props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
})

export default Profile
