import React from "react";
import Profile from "./Profile";
import {rootReducer} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/ProfileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";

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
    status: string
}
type MapDispatchPropsType = {
    getUserProfile: (userId: string)  => void
    getStatus: (userId: string) => void
}
type OwnPropsType = MapStateProps & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType,rootReducer>{

    componentDidMount (): void {
        let userId = this.props.match.params.userId
        if(!userId){userId = "13689"}
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render () {
        return (
            <div>
                <Profile {...this.props} profile = {this.props.profile} status={this.props.status} updateStatus={updateStatus}/>
            </div>
        )
    }
}
const mapStateToProps = (state: rootReducer): MapStateProps  => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

