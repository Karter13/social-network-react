import {Users} from './Users';
import {ReduxStoreProviderDecorator} from '../../stories/ReduxStoreProviderDecorator';
import {action} from '@storybook/addon-actions';
import React from 'react';

export default {
    title: 'Users component',
    component: Users,
    decorators: [ReduxStoreProviderDecorator]
}

const AddFollowCallback = action('Follow');
const AddUnFollowCallback = action('Un Follow');
const AddOnPageChangedCallback = action('Page Changed');


export const UsersBaseExample = () => {
    return <Users users={
        [ {
            name: "Dimich",
            id: '2',
            photos: {
                small: 'https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0',
                large: 'https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0',
            },
            status: 'BOSS-MASTER',
            followed: false
        },
            {
                name: "Maikl",
                id: '3',
                photos: {
                    small: 'https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0',
                    large: 'https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0',
                },
                status: 'STUDENT',
                followed: true
            }]
    }
                  pageSize={10}
                  totalItemsCount={100}
                  currentPage={5}
                  follow={AddFollowCallback}
                  unfollow={AddUnFollowCallback}
                  onPageChanged={AddOnPageChangedCallback}
                  followingInProgress={['']}/>
};
