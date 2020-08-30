import React from 'react';
import {addPost, updateNewPostText} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {RootStateType} from '../../../redux/store';
import {connect} from 'react-redux';

type MyPostsPropsType = {
}


const mapStateToProps = (state: RootStateType) => {
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
