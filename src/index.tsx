import React from 'react';
import './index.css';
import store from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App changeTextArea={store.changeTextArea.bind(store)} appState={store.getState()} addPost={store.addPost.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)

reportWebVitals();
