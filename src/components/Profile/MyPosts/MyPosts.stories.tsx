import {MyPosts, MyPostsPropsType} from './MyPosts';
import {ReduxStoreProviderDecorator} from '../../../stories/ReduxStoreProviderDecorator';
import React from 'react';
import {v1} from 'uuid';
import {action} from '@storybook/addon-actions';

export default {
    title: 'MyPosts component',
    component: MyPosts,
    decorators: [ReduxStoreProviderDecorator]
}

const UpdateNewPostText = action('New Post Text');
const AddPost = action('Value post text');

export const MyPostsBaseExample: React.FC<MyPostsPropsType> = () => {
    return <MyPosts
        posts={
            [
                {id: v1(), message: 'Good post', likesCount: 15},
                {id: v1(), message: 'I love React', likesCount: 20},
                {id: v1(), message: 'I love JS', likesCount: 10},
            ]}
        addPost={AddPost}/>
};
