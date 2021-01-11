import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "./StoreContext";

let rerenderEntireTree =(state?: any) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App/>
            <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

reportWebVitals();
