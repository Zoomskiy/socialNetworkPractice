import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/AuthReducer";
import {rootReducer} from "../../redux/redux-store";

class HeaderContainer extends React.Component<any, any> {
    componentDidMount (): void {
        this.props.getAuthUserData()
    }

    render () {
        return (
            <Header {...this.props}/>
        )
    }
}
const mapStateToProps = (state: rootReducer) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserData, logout}) (HeaderContainer)













