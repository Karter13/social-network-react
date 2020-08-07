import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {DispatchType, RootStateType} from '../../../redux/store';
import {connect} from 'react-redux';

type MyPostsPropsType = {
}


const mapStateToProps = (state: RootStateType) => {
 return {
     posts: state.profilePage.posts,
     newPostText: state.profilePage.newPostText
 }
};
const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        updateNewPostText:(text: string) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
};


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
