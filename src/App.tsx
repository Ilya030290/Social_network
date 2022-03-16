import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {ActionsTypes, StoreType} from "./redux/state";


type AppPropsType = {
    store: StoreType,
    dispatch: (action: ActionsTypes) => void
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className={s.app_wrapper}>
                <Header/>
                <Navbar/>
                <div className={s.app_wrapper_content}>
                    <Routes>
                        <Route path={'/dialogs/*'}
                               element={<Dialogs dialogsPage={props.store._state.dialogsPage}
                                                 dispatch={props.dispatch}/>}
                        />
                        <Route path={'/profile'}
                               element={<Profile profilePage={props.store._state.profilePage}
                                                 dispatch={props.dispatch}/>}
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
        </BrowserRouter>
    );
};

export default App;
