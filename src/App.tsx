import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Music} from './components/Music/Music';
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';
import {HashRouter, Route} from 'react-router-dom';
import {UsersContainer} from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect, Provider} from 'react-redux';
import {StateType, store} from './redux/redux-store';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import {Preloader} from './components/common/Preloader/Preloader';
import {withSuspense} from './hoc/withSuspense';

//with export default
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
//with export default
// const DialogsContainer = lazy(() =>
//     import('./components/Dialogs/DialogsContainer')
//         .then(({DialogsContainer}) => ({default: DialogsContainer})),
// );

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
                    <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                    <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
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
let AppContainer = compose<React.ComponentClass>(
    // withRouter,
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, StateType>(MapStateToProps, {initializeApp})
)
(App);

const SamuraiJSApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
};
export default SamuraiJSApp;
