import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Setting/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
    return (
            <div className='app-wrapper'>
                <div className='app-margin-left'></div>
                <HeaderContainer/>
                <Navbar/>
                <div class='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer />}/>

                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer />}/>
                    <Route path='/users'
                           render={() => <UsersContainer />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
                <div className='app-margin-right'></div>
            </div>
            );
}

export default App;
 