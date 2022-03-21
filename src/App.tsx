import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = () => {
    return (
        <div className={s.app_wrapper}>
            <Header/>
            <Navbar/>
            <div className={s.app_wrapper_content}>
                <Routes>
                    <Route path={'/dialogs/*'}
                           element={<DialogsContainer/>}
                    />
                    <Route path={'/profile'}
                           element={<Profile/>}
                    />
                    <Route path={'/news'}
                           element={<News/>}
                    />
                    <Route path={'/music'}
                           element={<Music/>}
                    />
                    <Route path={'/settings'}
                           element={<Settings/>}
                    />
                </Routes>
            </div>
        </div>
    );
};

export default App;
