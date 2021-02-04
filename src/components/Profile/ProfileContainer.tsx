import React from "react";
import Profile from "./Profile";
import {rootReducer} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/ProfileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

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
    isAuth: boolean
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
        if(!this.props.isAuth) return <Redirect to={"/Login"}/>

        return (
            <div>
                <Profile {...this.props} profile = {this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state: rootReducer): MapStateProps  => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)
