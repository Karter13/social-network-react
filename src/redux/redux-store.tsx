import {combineReducers, createStore} from 'redux'
import {sidebarReducer} from './sidebar-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {profileReducer} from './profile-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});

export type StateType = ReturnType<typeof reducers>
// export type StoreType = ReturnType<typeof store>
export let store = createStore(reducers);

