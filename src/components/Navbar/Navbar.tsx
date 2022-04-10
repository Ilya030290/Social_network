import React from 'react';
import {NavLink} from 'react-router-dom';
import s from "./Navbar.module.css";
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import GroupIcon from '@mui/icons-material/Group';
import FeedIcon from '@mui/icons-material/Feed';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SettingsIcon from '@mui/icons-material/Settings';

// @ts-ignore
const setActive = ({isActive}) => isActive ? s.active_link : s.link;

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.profile}>
                <NavLink to={'/profile'}  className={setActive}>Profile <PersonIcon ></PersonIcon></NavLink>
            </div>
            <div className={s.messages}>
                <NavLink to={'/dialogs'} className={setActive}>Messages <MessageIcon></MessageIcon></NavLink>
            </div>
            <div className={s.users}>
                <NavLink to={'/users'} className={setActive}>Users <GroupIcon></GroupIcon></NavLink>
            </div>
            <div className={s.news}>
                <NavLink to={'/news'} className={setActive}>News <FeedIcon></FeedIcon></NavLink>
            </div>
            <div className={s.music}>
                <NavLink to={'/music'} className={setActive}>Music <LibraryMusicIcon></LibraryMusicIcon></NavLink>
            </div>
            <div className={s.settings}>
                <NavLink to={'/settings'} className={setActive}>Settings <SettingsIcon></SettingsIcon></NavLink>
            </div>
        </nav>
    );
};

export default Navbar;