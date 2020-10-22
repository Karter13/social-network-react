import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileType} from '../../../redux/profile-reducer';
import {ProfileStatus} from './ProfileStatus';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';

export type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}
export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profile}>
            <div className={s.descriptionBlock}>
                <div className={s.photo}>
                    <img src={profile.photos.small}/>
                </div>
                <ProfileStatusWithHooks status={status}
                               updateStatus={updateStatus}
                />
            </div>
        </div>
    )
};
