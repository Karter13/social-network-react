import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from '../../common/Preloader/Preloader';
import {ContactsType, ProfileType} from '../../../redux/profile-reducer';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/noavatar.png'
import ProfileDataFormReduxForm from './ProfileDataForm';

//savePhoto type?
export type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: any
    saveProfile: (formData: ProfileType) => void
}
export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile, ...props}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            savePhoto(e.target.files[0])
        }
    };

    const onSubmit = (formData: ProfileType) => {
        saveProfile(formData)
        setEditMode(false)

        // saveProfile(formData).then(
        //     () => {
        //         setEditMode(false)
        //     }
        // )
    };

    return (
        <div className={s.profile}>
            <div className={s.descriptionBlock}>
                <div className={s.photo}>
                    <img src={profile.photos.large || userPhoto}/>
                </div>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

                {editMode
                    //initialValues={profile} profile={profile}????
                    ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={profile} isOwner={isOwner}/>}

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
};


type ProfileDataPropsType = {
    profile: ProfileType | null
    isOwner: boolean
    goToEditMode: () => void
}
const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
    return (
        profile && <div>

            {isOwner && <div>
                <button onClick={goToEditMode}>edit</button>
            </div>}

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
