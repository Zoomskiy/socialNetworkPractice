import React from "react";
import p from "./ProfileInfo.module.css"

function ProfileInfo() {
    return (
        <div>
            <div>
                <img
                    src="https://atlantis.nyc3.digitaloceanspaces.com/media/legacy/atlantis/Things_To_Do/Water_Park/Beaches/Hero/Experiences_Beach.jpg"
                    alt=""/>
            </div>
            <div className={p.descriptionBlock}>
                ava
            </div>
        </div>
    )
}

export default ProfileInfo