import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Set from "./components/Set/Set";
import Users from "./components/Users/Users";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";





const App = (props) => {
    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*' element={<DialogsContainer store={props.store}/>}/>
                        <Route path='/profile' element={<Profile />}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/Music' element={<Music/>}/>
                        <Route path='/Set' element={<Set/>}/>
                        <Route path='/Users' element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>

    );
}


export default App;
