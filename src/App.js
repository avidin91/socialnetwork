import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Set from "./components/Set/Set";
import {Route, Routes} from "react-router-dom";





const App = (props) => {
    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage}
                                                                   addMessage={props.addMessage}
                                                                   dialogsPage={props.state.dialogsPage}
                                                                   updateNewMessageText={props.updateNewMessageText}/>}/>
                        <Route path='/profile' element={<Profile profilePage={props.state.profilePage}
                                                                 dispatch={props.dispatch} />}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/Music' element={<Music/>}/>
                        <Route path='/Set' element={<Set/>}/>
                    </Routes>
                </div>
            </div>

    );
}


export default App;
