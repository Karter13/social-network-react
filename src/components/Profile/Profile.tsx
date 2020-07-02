import React from 'react';

import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img src="https://photojournal.jpl.nasa.gov/figures/PIA17172_fig1.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
};
