import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {Sidebar} from "./Sidebar/Sidebar";

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <div className={s.item}>
                    <NavLink to={'/profile'} activeClassName={s.activeLick}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'/dialogs'} activeClassName={s.activeLick}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'/news'} activeClassName={s.activeLick}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'/music'} activeClassName={s.activeLick}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'/settings'} activeClassName={s.activeLick}>Settings</NavLink>
                </div>
            </div>
            <Sidebar/>
        </nav>
    )
};
