import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileType} from '../../../redux/profile-reducer';
import {ProfileStatus} from './ProfileStatus';

export type ProfileInfoPropsType = {
    profile: ProfileType | null
}
export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profile}>
            <div className={s.descriptionBlock}>
                <div className={s.photo}>
                    <img src={props.profile.photos.small}/>
                </div>
                <ProfileStatus status={'Hello oll'}/>
            </div>
        </div>
    )
};
