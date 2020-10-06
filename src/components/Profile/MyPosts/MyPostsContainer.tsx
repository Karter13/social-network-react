import React from 'react';
import {addPost} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {StateType} from '../../../redux/redux-store';
import {postsSelector} from '../../../redux/profile-selectors';

const mapStateToProps = (state: StateType) => {
 return {
     posts: postsSelector(state),
 }
};

export const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);
