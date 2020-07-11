import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AddPostType, PostType, ProfilePageType} from "../../redux/state";
import {} from "../../App";

type ProfilePropsType = {
    state: ProfilePageType
    addPost: AddPostType
}
export const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts messages={props.state.posts} addPost={props.addPost}/>
        </div>
    )
};
