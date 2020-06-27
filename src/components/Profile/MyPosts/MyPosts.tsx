import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Good post' likesCount={15} />
                <Post message='I love React' likesCount={20} />
                <Post message='I love JS' likesCount={10} />
            </div>
        </div>
    )
};
