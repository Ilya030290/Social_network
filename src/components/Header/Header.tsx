import React from 'react';
import s from "./Header.module.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import {NavLink} from "react-router-dom";
import LogoIcon from "../../assets/images/loon-icon.svg";

type HeaderPropsType = {
    isAuth: boolean,
    login: string
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img className={s.icon} src={LogoIcon}></img>
            <div className={s.loginBlock}>
                { props.isAuth
                    ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;