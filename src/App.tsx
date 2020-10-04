import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Music} from './components/Music/Music';
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';
import {Route} from 'react-router-dom';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {UsersContainer} from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect} from 'react-redux';
import {StateType} from './redux/redux-store';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import {Preloader} from './components/common/Preloader/Preloader';

export type OwnPropsType = {}
export type MapStatePropsType = {
    initialized: boolean
}
export type MapDispatchPropsType = {
    initializeApp: () => void
}

type AppPropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType

class App extends React.Component<AppPropsType> {

    componentDidMount(): void {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

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


const MapStateToProps = (state: StateType) => {
    return {
        initialized: state.app.initialized
    }
};
//правильная ли типизация  compose
export default compose<React.ComponentClass>(
    // withRouter,
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, StateType>(MapStateToProps, {initializeApp})
)
(App)
