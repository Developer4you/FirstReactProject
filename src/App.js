import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Setting/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-margin-left'></div>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div class='app-wrapper-content'>
                    <Route path="/dialogs"
                           render={() => <Dialogs
                               state={props.state.dialogsPage}/>}/>

                    <Route path="/profile"
                           render={() => <Profile profilePage={props.state.profilePage}
                                            dispatch={props.dispatch}/>}/>

                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
            <div className='app-margin-right'></div>
        </BrowserRouter>
    );
}

export default App;
 