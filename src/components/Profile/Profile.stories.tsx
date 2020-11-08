import {Profile} from './Profile';
import {ReduxStoreProviderDecorator} from '../../stories/ReduxStoreProviderDecorator';
import React from 'react';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Profile component',
    component: Profile,
    decorators: [ReduxStoreProviderDecorator]
}

const UpdateeStatusCallback = action('UpdateeStatus');

export const ProfileBaseExample = () => {
    return <Profile
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
        updateStatus={UpdateeStatusCallback}
        isOwner={true}
        savePhoto={''}
        saveProfile={()=> Promise.resolve()}
    />
};
