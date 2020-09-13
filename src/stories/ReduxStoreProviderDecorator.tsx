import {combineReducers, createStore} from 'redux';
import {profileReducer} from '../redux/profile-reducer';
import {dialogsReducer} from '../redux/dialogs-reducer';
import {sidebarReducer} from '../redux/sidebar-reducer';
import {usersReducer} from '../redux/users-reducer';
import {authReducer} from '../redux/auth-reducer';
import {Provider} from 'react-redux';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});


export const storyBookStore = createStore(rootReducer);


export const ReduxStoreProviderDecorator = (storyFn: any) => {
    return <BrowserRouter>
        <Provider store={storyBookStore}>
            {storyFn()}
        </Provider>
    </BrowserRouter>
};
