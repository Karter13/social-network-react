import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    addMessage,
    addPost,
    RootStateType,
    state,
    subscribe,
    updateNewMessageText,
    updateNewPostText
} from './redux/state'
import {BrowserRouter} from "react-router-dom";


export type RenderEntireTreeType = (state: RootStateType) => void
let renderEntireTree: RenderEntireTreeType = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addMessage={addMessage}
                 updateNewMessageText={updateNewMessageText}
            />
        </BrowserRouter>
        , document.getElementById('root')
    );
};


renderEntireTree(state);

subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
