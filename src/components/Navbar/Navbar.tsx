import React from 'react';
import s from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <div className={s.item}>
                    <a>Profile</a>
                </div>
                <div className={s.item}>
                    <a>Messages</a>
                </div>
                <div className={s.item}>
                    <a>news</a>
                </div>
                <div className={s.item}>
                    <a>Musik</a>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <a>Settings</a>
                </div>
            </div>
        </nav>
    )
};
