import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostType, ProfileType,} from '../../../redux/profile-reducer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormControls/FormControls';

type PathParamType = {}
type MapStatePropsType = {
    posts: Array<PostType>
}
type MapDispatchPropsType = {
    addPost: (value: string) => void
}
export type MyPostsPropsType = PathParamType & MapStatePropsType & MapDispatchPropsType

export const MyPosts: React.FC<MyPostsPropsType> = React.memo((props) => {

    let postsElement = props.posts
        .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    const onAddPost = (formData: AddPostsFormType) => {
        props.addPost(formData.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostFormRedux onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
});

type AddPostsFormType = {
    newPostText: string
}
const maxLength10 = maxLengthCreator(10);

export const AddNewPostForm: React.FC<InjectedFormProps<AddPostsFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'newPostText'}
                       placeholder={'Enter your post'}
                       validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

const AddPostFormRedux = reduxForm<AddPostsFormType>({form: 'profileAddNewPostForm'})(AddNewPostForm);
