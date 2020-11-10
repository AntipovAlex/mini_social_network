import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessanger, addPost, updeateNewMessangerText, updeateNewPostText} from "./redux/state";

export let reRenderEntireThee = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updeateNewPostText={updeateNewPostText}
                 addMessanger={addMessanger}
                 updeateNewMessangerText={updeateNewMessangerText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


