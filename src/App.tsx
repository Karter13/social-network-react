import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import {
    AddMessageType,
    AddPostType,
    RootStateType, updateNewMessageText,
    UpdateNewMessageTextType,
    UpdateNewPostTextType
} from "./redux/state";

type AppPropsType = {
    state: RootStateType
    addPost: AddPostType
    updateNewPostText: UpdateNewPostTextType
    addMessage: AddMessageType
    updateNewMessageText: UpdateNewMessageTextType
}
const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() => <Profile
                           profilePage={props.state.profilePage}
                           addPost={props.addPost}
                           updateNewPostText={props.updateNewPostText}/>}/>
                <Route path='/dialogs'
                       render={() => <Dialogs
                           dialogsPage={props.state.dialogsPage}
                           addMessage={props.addMessage}
                           updateNewMessageText={updateNewMessageText}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
};

export default App;
