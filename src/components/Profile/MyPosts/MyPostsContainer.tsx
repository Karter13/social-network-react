import React from 'react';
import {addPost} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {StateType} from '../../../redux/redux-store';

type MyPostsPropsType = {
}

const mapStateToProps = (state: StateType) => {
 return {
     posts: state.profilePage.posts,
 }
};

export const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);
