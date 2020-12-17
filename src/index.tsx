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
            <App dispatch={store.dispatch.bind(store)} appState={store.getState()}/>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)

reportWebVitals();
