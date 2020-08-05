import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Music} from './components/Music/Music';
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';
import {Route} from 'react-router-dom';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';

type AppPropsType = {
    store: any
}
export const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() => <Profile store={props.store}
                       />}/>
                <Route path='/dialogs'
                       render={() => <DialogsContainer store={props.store}
                       />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
};


