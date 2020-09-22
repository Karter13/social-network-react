import {ProfileInfo, ProfileInfoPropsType} from './ProfileInfo';
import React from 'react';
import {Profile} from '../Profile';
import any = jasmine.any;

export default {
    title: 'ProfileInfo component',
    component: ProfileInfo,
}

export const ProfileInfoBaseExample: React.FC<ProfileInfoPropsType> = () => {
    return <ProfileInfo

        profile={
            {
                aboutMe: 'Maikl',
                contacts: {
                    facebook: 'yes',
                    website: 'yes',
                    vk: 'yes',
                    twitter: 'yes',
                    instagram: 'yes',
                    youtube: 'yes',
                    github: 'yes',
                    mainLink: 'yes'
                },
                lookingForAJob: true,
                lookingForAJobDescription: 'Yes',
                fullName: 'Maikl',
                userId: '2',
                photos: {
                    small: 'https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0',
                    large: 'https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0',
                }
            }
        }
        status={'Active'}
        updateStatus={(status: string) => any}
    />
};
