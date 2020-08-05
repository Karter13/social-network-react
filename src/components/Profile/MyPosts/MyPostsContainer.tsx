import React from 'react';
import {RootStateType, StoreType} from '../../../redux/store';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';

type MyPostsPropsType = {
    store: StoreType
}

export const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {

    let state = props.store.getState().profilePage;

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };
    const onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 posts={state.posts}
                 newPostText={state.newPostText}
        />
    )
};
