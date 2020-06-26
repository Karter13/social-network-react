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
                <Post message='Good post' number={3} />
                <Post message='I love React' number={4} />
                <Post message='I love JS' number={10} />
            </div>
        </div>
    )
};
