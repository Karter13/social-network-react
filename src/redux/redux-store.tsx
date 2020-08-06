import {combineReducers, createStore} from 'redux'
import {sidebarReducer} from './sidebar-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {profileReducer} from './profile-reducer';
import {StoreType} from './store';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});

export type StateType = ReturnType<typeof reducers>

export let store: StoreType = createStore(reducers);

