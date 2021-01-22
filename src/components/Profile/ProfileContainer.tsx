import React from "react";
import Profile from "./Profile";
import {rootReducer} from "../../redux/redux-store";
import axios from "axios";
import {connect} from "react-redux";
import { setUserProfile} from "../../redux/ProfileReducer";
import {RouteComponentProps, withRouter } from "react-router-dom";

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
        small: string | undefined,
        large: string | undefined
    }

}

type PathParamsType = {
    userId: string
}
type MapStateProps = {
    profile: allDataProfileTypes
}
type MapDispatchPropsType = {
    setUserProfile : (profile: allDataProfileTypes) => void
}
type OwnPropsType = MapStateProps & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType,rootReducer>{

    componentDidMount (): void {
        let userId = this.props.match.params.userId
        if(!userId){userId = "13689"}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

const mapStateToProps = (state: rootReducer): MapStateProps  => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)
