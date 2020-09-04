import React from 'react';
import style from './Header.module.css'
import {NavLink} from 'react-router-dom';

type HeaderPropsType ={
    isAuth: boolean
    login: string | null
}

export const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={style.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/8/8a/Wikinews-logo.png' alt=""/>
            <div className={style.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
};
