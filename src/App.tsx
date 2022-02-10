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
import {PostPropsType} from "./components/Profile/MyPosts/Post/Post";
import {DialogItemPropsType} from "./components/Dialogs/DialogItem/DialogItem";
import {MessagePropsType} from "./components/Dialogs/Message/Message";


type AppPropsType = {
    postsData: Array<PostPropsType>,
    dialogsData: Array<DialogItemPropsType>,
    messagesData: Array<MessagePropsType>
}

const App = (props:AppPropsType) => {
    return (
        <BrowserRouter>
        <div className={s.app_wrapper}>
            <Header/>
            <Navbar/>
            <div className={s.app_wrapper_content}>
                <Routes>
                    <Route path={'/dialogs/*'} element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                    <Route path={'/profile'} element={<Profile postsData={props.postsData}/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                </Routes>
            </div>
        </div>
        </BrowserRouter>
    );
};

export default App;
