import React from 'react';
import {addPost, updateNewPostText} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {StateType} from '../../../redux/redux-store';

type MyPostsPropsType = {
}

const mapStateToProps = (state: StateType) => {
 return {
     posts: state.profilePage.posts,
     newPostText: state.profilePage.newPostText
 }
};

//До оптимизации
// const mapDispatchToProps = (dispatch: DispatchType) => {
//     return {
//         updateNewPostText:(text: string) => {
//             dispatch(updateNewPostTextActionCreator(text));
//         },
//         addPost: () => {
//             dispatch(addPostActionCreator());
//         }
//     }
// };

export const MyPostsContainer = connect(mapStateToProps, {addPost, updateNewPostText})(MyPosts);
