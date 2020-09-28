import React from 'react';
import style from './Header.module.css'
import {NavLink} from 'react-router-dom';

export type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

export const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={style.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/8/8a/Wikinews-logo.png' alt=""/>
            <div className={style.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
};
