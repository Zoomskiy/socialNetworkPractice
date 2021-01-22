import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route } from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App() {
    return (
        <div className='app-wrapper'>
                <Header/>
                <Navigation/>
                <div className="app-wrapper-content">
                    <Route path={"/Profile"} render={() => <ProfileContainer />}/>
                    <Route path={"/Dialogs"} render={() => <DialogsContainer />}/>
                    <Route  path={"/Users"} render={() => <UsersContainer />}/>
                    <Route path={"/News"} render={() => <News/>}/>
                    <Route path={"/Music"} render={() => <Music/>}/>
                    <Route path={"/Settings"} render={() => <Settings/>}/>
                </div>



        </div>
    )
}


export default App;
