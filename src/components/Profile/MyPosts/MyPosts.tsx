import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostType,} from '../../../redux/profile-reducer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

export type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (value: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElement = props.posts
        .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);


    const onSubmit = (formData: AddPostsFormType) => {
        props.addPost(formData.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostsFormRedux onSubmit={onSubmit}/>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
};

type AddPostsFormType = {
    newPostText: string
}

export const AddPostForm: React.FC<InjectedFormProps<AddPostsFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newPostText'} placeholder={'Enter your post'}/>
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    )
};

const AddPostsFormRedux = reduxForm<AddPostsFormType>({form: 'profileAddPostForm'})(AddPostForm);
