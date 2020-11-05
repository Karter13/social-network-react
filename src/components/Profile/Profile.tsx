import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-reducer';
import {ProfileDataFormType} from './ProfileInfo/ProfileDataForm';

type ProfilePropsType = {
    status: string
    profile: ProfileType | null
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: any
    saveProfile: (formData: ProfileDataFormType) => void
}
export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         saveProfile={props.saveProfile}
                         savePhoto={props.savePhoto}
            />
            <MyPostsContainer/>
        </div>
    )
};
