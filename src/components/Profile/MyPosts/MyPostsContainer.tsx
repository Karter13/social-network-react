import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {StoreContext} from '../../../StoreContext';

type MyPostsPropsType = {
}

export const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().profilePage;

                const addPost = () => {
                    store.dispatch(addPostActionCreator());
                };
                const onPostChange = (text: string) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                };
                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                posts={state.posts}
                                newPostText={state.newPostText}
                />
            }}
        </StoreContext.Consumer>
    )
};
