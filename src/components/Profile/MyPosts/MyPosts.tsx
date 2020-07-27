import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {ActionsTypes, PostType} from '../../../redux/state';

type MyPostsPropsType = {
    messages: Array<PostType>
    newPostText: string
    dispatch:(action: ActionsTypes) => void
}
export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElement = props.messages
        .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    const addPostMessage = () => {
            props.dispatch({type: 'ADD-POST'});
    };
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: e.currentTarget.value});
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
