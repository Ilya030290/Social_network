import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";


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
                    <Route path={'/profile/:userId'}
                           element={<ProfileContainer/>}
                    />
                    <Route path={'/profile'}
                           element={<ProfileContainer/>}
                    />
                    <Route path={'/users'}
                           element={<UsersContainer />}
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
