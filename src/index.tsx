import React from 'react';
import './index.css';
import state, {subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {addPost, changeTextArea} from "./redux/state";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App changeTextArea={changeTextArea} appState={state} addPost={addPost}/>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree()

subscribe(rerenderEntireTree)

reportWebVitals();
