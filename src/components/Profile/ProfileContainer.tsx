import React from "react";
import Profile from "./Profile";
import {rootReducer} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/ProfileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";

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
    getUserProfile: (userId: any)  => void
}
type OwnPropsType = MapStateProps & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType,rootReducer>{

    componentDidMount (): void {
        let userId = this.props.match.params.userId
        if(!userId){userId = "13689"}
        this.props.getUserProfile(userId)
    }

    render () {
        return (
            <div>
                <Profile {...this.props} profile = {this.props.profile}/>
            </div>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const mapStateToProps = (state: rootReducer): MapStateProps  => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)
