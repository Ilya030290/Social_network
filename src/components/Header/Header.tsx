import React from 'react';
import s from "./Header.module.css";
import InstagramIcon from '@mui/icons-material/Instagram';

const Header = () => {
    return (
        <header className={s.header}>
            <InstagramIcon className={s.icon}></InstagramIcon>
        </header>
    );
}

export default Header;