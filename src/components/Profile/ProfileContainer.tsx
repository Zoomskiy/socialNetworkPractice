import React from "react";
import Profile from "./Profile";
import {rootReducer} from "../../redux/redux-store";
import axios from "axios";
import {connect} from "react-redux";
import { setUserProfile} from "../../redux/ProfileReducer";

export type allDataProfileTypes = {
    aboutMe:string,
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram:string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }

}

type ProfileContainerPropsType = {
    setUserProfile: (profile: allDataProfileTypes) => void
    profile: allDataProfileTypes
}

class ProfileContainer extends React.Component<ProfileContainerPropsType,rootReducer>{

    componentDidMount (): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render () {
        return (
            <div>
                <Profile {...this.props} profile = {this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile
})



export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)
