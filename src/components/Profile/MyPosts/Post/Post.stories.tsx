import {Post} from './Post';
import React from 'react';

export default {
    title: 'Post component',
    component: Post
}

export const PostBaseExample = () => {
    return <Post message={'Example message'} likesCount={111}/>
};
