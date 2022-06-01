import React from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import LogoIcon from "../../assets/images/loon-icon.svg";
import {AuthReducerStateType} from "../../redux/auth-reducer";
import {Button} from "@mui/material";


type HeaderPropsType = AuthReducerStateType & {
    setAuthUserData: (id: number, email:string, login:string) => void
    makeLogOut: () => void
}


const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img className={s.icon} src={LogoIcon}></img>
            <div className={s.loginBlock}>
                { props.isAuth
                    ? <div>
                        <span>{props.login}</span>
                        <Button variant={"contained"}
                                style={{marginLeft: "10px", backgroundColor: "#38434f"}}
                                size={"small"}
                                onClick={props.makeLogOut}
                        >
                            LogOut
                        </Button>
                    </div>
                    : <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;