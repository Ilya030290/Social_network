import React from 'react';
import s from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer, WithRouter} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {LoginContainer} from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {AppRootStateType} from "./redux/redux-store";
import {Preloader} from "./common/Preloader/Preloader";


type MapStateToPropsType = {
    initialized: boolean
}
type MapDispatchToPropsType = {
    initializeApp: () => void
}

export type AppPropsType = MapStateToPropsType & MapDispatchToPropsType;

class App extends React.Component<AppPropsType> {

    componentDidMount() {

        this.props.initializeApp();
    }

    render() {

        if(!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className={s.app_wrapper}>
                <HeaderContainer/>
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
                               element={<UsersContainer/>}
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
                        <Route path={'/login'}
                               element={<LoginContainer/>}
                        />
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        initialized: state.app.initialized
    }
}

export default  compose<React.ComponentType>(connect(mapStateToProps, {initializeApp}), WithRouter)(App);
