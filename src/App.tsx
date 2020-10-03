import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Music} from './components/Music/Music';
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';
import {Route, withRouter} from 'react-router-dom';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {UsersContainer} from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect} from 'react-redux';
import {StateType} from './redux/redux-store';
import {getAuthUserData} from './redux/auth-reducer';
import {compose} from 'redux';

export type OwnPropsType = {}
export type MapStatePropsType = {}
export type MapDispatchPropsType = {
    getAuthUserData: () => void
}

type AppPropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType

class App extends React.Component<AppPropsType> {

    componentDidMount(): void {
        this.props.getAuthUserData();
    }

    render() {
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer pageTitle={'Самураи'}/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

//правильная ли типизация  compose
export default compose<React.ComponentClass>(
    // withRouter,
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, StateType>
    (null, {getAuthUserData}))
(App)
