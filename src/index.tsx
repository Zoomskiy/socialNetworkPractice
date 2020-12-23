import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state: any) => {
debugger
    ReactDOM.render(
        <BrowserRouter>
            <App  dispatch={store.dispatch.bind(store)} appState={store.getState()}/>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
    }
)

reportWebVitals();
