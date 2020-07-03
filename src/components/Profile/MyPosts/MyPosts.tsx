import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

type PostType = {
    id: number
    message: string
    likesCount: number
}
export const MyPosts = () => {

    const posts: Array<PostType> = [
        {id: 1, message: 'Good post', likesCount: 15},
        {id: 2, message: 'I love React', likesCount: 20},
        {id: 3, message: 'I love JS', likesCount: 10},
    ];

    let postsElement = posts
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>)


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
};
