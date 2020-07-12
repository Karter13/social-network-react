import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AddPostType, ProfilePageType, UpdateNewPostTextType} from "../../redux/state";
import {} from "../../App";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: AddPostType
    updateNewPostText: UpdateNewPostTextType
}
export const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts messages={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    )
};
