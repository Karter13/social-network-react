import {applyMiddleware, combineReducers, createStore} from 'redux'
import {sidebarReducer} from './sidebar-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {profileReducer} from './profile-reducer';
import {usersReducer} from './users-reducer';
import {authReducer} from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import {appReducer} from './app-reducer';
import {composeWithDevTools} from 'redux-devtools-extension';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
});

export type StateType = ReturnType<typeof reducers>

export let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

// @ts-ignore
window.store = store;


