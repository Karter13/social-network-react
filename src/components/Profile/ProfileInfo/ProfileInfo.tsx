import React, {ChangeEvent, useState} from 'react';
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

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
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

                {editMode ? <ProfileDataForm profile={profile}/> : <ProfileData profile={profile}/>}

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
};

type ProfileDataPropsType = {
    profile: ProfileType | null
}
const ProfileData: React.FC<ProfileDataPropsType> = ({profile}) => {
    return (
        profile && <div>
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
                <b>Contacts</b>: {(Object.keys(profile.contacts) as Array<keyof ContactsType>).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
};

type ProfileDataFormPropsType = {
    profile: ProfileType | null
}
const ProfileDataForm: React.FC<ProfileDataFormPropsType> = ({profile}) => {
    return (
        profile && <div>
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
                <b>Contacts</b>: {(Object.keys(profile.contacts) as Array<keyof ContactsType>).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
};


type ContactPropsType = {
    contactTitle: string
    contactValue: any
}
const Contact: React.FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )

}
