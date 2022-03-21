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
import {ReduxStoreType, store} from "./redux/redux-store";


type AppPropsType = {
    store: ReduxStoreType
}

const App = (props: AppPropsType) => {
    const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className={s.app_wrapper}>
                <Header/>
                <Navbar/>
                <div className={s.app_wrapper_content}>
                    <Routes>
                        <Route path={'/dialogs/*'}
                               element={<Dialogs dialogsPage={state.dialogsPage}
                                                 dispatch={store.dispatch.bind(store)}/>}
                        />
                        <Route path={'/profile'}
                               element={<Profile profilePage={state.profilePage}
                                                 dispatch={store.dispatch.bind(store)}/>}
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
