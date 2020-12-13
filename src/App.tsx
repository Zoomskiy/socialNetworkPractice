import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {StateType} from "./redux/state";

type AppPropsType = {
    appState: StateType
    addPost: (postMessage: string) => void
    changeTextArea: (newText: string) => void
}

function App(props: AppPropsType) {


    return (
        <div className='app-wrapper'>

                <Header/>
                <Navigation/>
                {/*<Profile/>*/}

                <div className="app-wrapper-content">
                    <Route path={"/Profile"} render={() => <Profile changeTextArea={props.changeTextArea} state={props.appState.profilePage} addPostCallback={props.addPost}/>}/>
                    <Route path={"/Dialogs"} render={() => <Dialogs state={props.appState.dialogsProfile}/>}/>
                    <Route path={"/News"} render={() => <News/>}/>
                    <Route path={"/Music"} render={() => <Music/>}/>
                    <Route path={"/Settings"} render={() => <Settings/>}/>
                </div>



        </div>
    )
}


export default App;
