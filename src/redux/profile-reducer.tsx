import {v1} from 'uuid';
import {ActionsTypes, PostType, ProfilePageType} from './store';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: v1(), message: 'Good post', likesCount: 15},
        {id: v1(), message: 'I love React', likesCount: 20},
        {id: v1(), message: 'I love JS', likesCount: 10},
    ],
    newPostText: '',
    profile: null
};

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {

    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }

        case SET_USER_PROFILE:
        return {...state, profile: action.profile};
        default:
            return state;
    }

};

export const addPost = () => ({type: ADD_POST} as const);
export const updateNewPostText = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const);
export const setUserProfile = (profile: string) => ({type: SET_USER_PROFILE, profile} as const);
