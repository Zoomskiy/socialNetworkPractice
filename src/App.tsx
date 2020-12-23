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
import {ActionsTypes, StateType} from "./redux/state";

type AppPropsType = {
    appState: StateType
    dispatch: (action: ActionsTypes) => void

}

function App(props: AppPropsType) {


    return (

        <div className='app-wrapper'>


                <Header/>
                <Navigation/>
                {/*<Profile/>*/}

                <div className="app-wrapper-content">

                    <Route path={"/Profile"} render={() => <Profile dispatch={props.dispatch} state={props.appState.profilePage}/>}/>
                    <Route path={"/Dialogs"} render={() => <Dialogs dispatch={props.dispatch} state={props.appState.dialogsProfile}/>}/>
                    <Route path={"/News"} render={() => <News/>}/>
                    <Route path={"/Music"} render={() => <Music/>}/>
                    <Route path={"/Settings"} render={() => <Settings/>}/>
                </div>



        </div>
    )
}


export default App;
