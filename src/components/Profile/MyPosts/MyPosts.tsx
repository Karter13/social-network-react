import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostType,} from '../../../redux/profile-reducer';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';

export type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElement = props.posts
        .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    const onAddPost = () => {
        props.addPost();
    };
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.updateNewPostText(text);
    };

    const onSubmit = (formData: PostsFormType) => {
        console.log(formData)
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <PostsReduxForm onSubmit={onSubmit}/>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
};

type PostsFormType = {
    postText: string
}

export const PostsForm: React.FC<InjectedFormProps<PostsFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'postText'}/>
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    )
};

const PostsReduxForm = reduxForm<PostsFormType>({form: 'postsForm'})(PostsForm);
