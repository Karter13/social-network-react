import React, {RefObject} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {AddPostType, PostType} from "../../../redux/state";

type MyPostsPropsType = {
    messages: Array<PostType>
    addPost: AddPostType
}
export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElement = props.messages
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPostMessage = () => {
        if(newPostElement && newPostElement.current) {
            let text = newPostElement.current.value;
            props.addPost(text);
            newPostElement.current.value = '';
        }
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value='IT-CAMASUTRA!'/>
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
