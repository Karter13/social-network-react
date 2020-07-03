import React from 'react';
import s from './ProfileInfo.module.css'


type ProfileInfoPropsType = {

}
export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    return (
        <div className={s.profile}>
            <div>
                <img src="https://photojournal.jpl.nasa.gov/figures/PIA17172_fig1.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
};
