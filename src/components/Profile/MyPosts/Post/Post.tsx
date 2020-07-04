import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likesCount: number
}
export const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={s.item}>
            <img
                src="http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false"
                alt="avatar"/>
            {props.message}
            <div>
                <span>
                    likes
                </span>
                {props.likesCount}
            </div>
        </div>
    )
};
