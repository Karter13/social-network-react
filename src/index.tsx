import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from 'react-router-dom';
import {RootStateType} from './redux/store';
import {StateType, store} from './redux/redux-store';
import {StoreContext} from './StoreContext';


export type RenderEntireTreeType = (state: StateType) => void
let renderEntireTree: RenderEntireTreeType = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>
        </BrowserRouter>
        , document.getElementById('root')
    );
};

renderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
