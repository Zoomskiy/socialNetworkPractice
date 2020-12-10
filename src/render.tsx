import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {addPost, StateType} from "./redux/state";

export let rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={state} addPost={addPost}/>
        </BrowserRouter>, document.getElementById('root'));
}



reportWebVitals();
