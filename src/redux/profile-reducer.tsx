import {v1} from 'uuid';
import {ActionsTypes, PostType, ProfilePageType} from './store';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: v1(), message: 'Good post', likesCount: 15},
        {id: v1(), message: 'I love React', likesCount: 20},
        {id: v1(), message: 'I love JS', likesCount: 10},
    ],
    newPostText: ''
};

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {

    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0,
            };
            if (newPost.message.trim()) {
                state.posts.push(newPost);
                state.newPostText = '';
            }
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

};

export const addPostActionCreator = () => ({type: ADD_POST} as const);
export const updateNewPostTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
} as const);