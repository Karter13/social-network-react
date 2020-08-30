import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from '../../common/Preloader/Preloader';

type ProfileInfoPropsType = {
    profile: any
}
export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profile}>
            <div>
                <img src="https://photojournal.jpl.nasa.gov/figures/PIA17172_fig1.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.photo}>
                    <img src={props.profile.photos.small}/>
                </div>
                ava + description
            </div>
        </div>
    )
};
