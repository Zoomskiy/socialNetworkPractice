import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import {Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {ActionsTypes} from "./redux/state";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    appStore: any
    dispatch: (action: ActionsTypes) => void

}

function App(props: AppPropsType) {


    return (

        <div className='app-wrapper'>


                <Header/>
                <Navigation/>
                <div className="app-wrapper-content">

                    <Route path={"/Profile"} render={() => <Profile store={props.appStore}/>}/>
                    <Route path={"/Dialogs"} render={() => <DialogsContainer store={props.appStore}/>}/>
                    <Route path={"/News"} render={() => <News/>}/>
                    <Route path={"/Music"} render={() => <Music/>}/>
                    <Route path={"/Settings"} render={() => <Settings/>}/>
                </div>



        </div>
    )
}


export default App;
