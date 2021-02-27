import React from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route, withRouter } from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/AppReducer";
import {Preloader} from "./common/preloader/Preloader";

class App extends React.Component<any, any> {
    componentDidMount (): void {
        this.props.initializeApp()
    }

    render () {
        if(!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navigation/>
                <div className="app-wrapper-content">
                    <Route path={"/Profile/:userId?"} render={() => <ProfileContainer/>}/>
                    <Route path={"/Dialogs"} render={() => <DialogsContainer/>}/>
                    <Route path={"/Users"} render={() => <UsersContainer/>}/>
                    <Route path={"/News"} render={() => <News/>}/>
                    <Route path={"/Music"} render={() => <Music/>}/>
                    <Route path={"/Settings"} render={() => <Settings/>}/>
                    <Route path={"/Login"} render={() => <Login/>}/>
                </div>
            </div>
        )
    }
}

const mstp = (state: any) => ({
    initialized: state.app.initialized
})
export default compose <React.ComponentType>(
    withRouter,
    connect (mstp, {initializeApp}))(App)
