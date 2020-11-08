import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-reducer';

type ProfilePropsType = {
    status: string
    profile: ProfileType | null
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: any
    saveProfile: (formData: ProfileType) => Promise<void>
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
