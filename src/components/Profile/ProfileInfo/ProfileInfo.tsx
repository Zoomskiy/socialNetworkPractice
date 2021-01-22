import React from "react";
import p from "./ProfileInfo.module.css"
import {Preloader} from "../../../common/preloader/Preloader";
import {allDataProfileTypes} from "../ProfileContainer";

type ProfileInfoPropsType = {
    profile: allDataProfileTypes
}

function ProfileInfo (props: ProfileInfoPropsType) {
    if(!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src="https://atlantis.nyc3.digitaloceanspaces.com/media/legacy/atlantis/Things_To_Do/Water_Park/Beaches/Hero/Experiences_Beach.jpg"
                    alt=""/>
            </div>
            <div className={p.descriptionBlock}>
                <img alt={"img smt"} src={props.profile.photos.large}/>
                <div>
                    {props.profile.aboutMe}
                </div>
                <div>
                    {props.profile.fullName}
                </div>
                <div>
                    {props.profile.lookingForAJob}
                </div>
                <div>
                    {props.profile.contacts.github}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo