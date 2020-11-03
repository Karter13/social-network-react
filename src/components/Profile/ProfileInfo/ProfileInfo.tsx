import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from '../../common/Preloader/Preloader';
import {ContactsType, ProfileType} from '../../../redux/profile-reducer';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/noavatar.png'

export type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: any
}
export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }
    //types for e?
    // DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    };

    return (
        <div className={s.profile}>
            <div className={s.descriptionBlock}>
                <div className={s.photo}>
                    <img src={profile.photos.large || userPhoto}/>
                </div>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

                <div>
                    <div>
                        <b>FullName:</b>{profile.fullName}
                    </div>
                    <div>
                        <b>LookingForAJob:</b>{profile.lookingForAJob ? 'YES' : 'No'}
                    </div>
                    {profile.lookingForAJob &&
                    <div>
                        <b>My professional skills:</b>{profile.lookingForAJobDescription}
                    </div>
                    }
                    <div>
                        <b>About me:</b>{profile.aboutMe ? 'YES' : 'No'}
                    </div>
                    <div>
                        <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                           return <Contact key={key} contactTitle = {key} contactValue = {'profile.contacts[key]' }/>
                    })}
                    </div>
                </div>

                <ProfileStatusWithHooks status={status}
                                        updateStatus={updateStatus}
                />
            </div>
        </div>
    )
};

type ContactPropsType = {
    contactTitle: string
    contactValue: any
}

const Contact: React.FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return <div>
        <b>{contactTitle}</b>: {contactValue}
    </div>

}
