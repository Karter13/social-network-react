import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {AddPostType, PostType, UpdateNewPostTextType} from "../../../redux/state";

type MyPostsPropsType = {
    messages: Array<PostType>
    addPost: AddPostType
    newPostText: string
    updateNewPostText: UpdateNewPostTextType
}
export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElement = props.messages
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    const addPostMessage = () => {
            props.addPost();
    };
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.updateNewPostText(e.currentTarget.value);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick = {addPostMessage}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
};
