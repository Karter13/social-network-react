import {v1} from 'uuid';
import {ActionsTypes} from './store';
import {profileAPI, usersAPI} from '../api/api';
import {ThunkDispatchUsers, ThunkType} from './users-reducer';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type ContactsType = {
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string,
    github: string,
    mainLink: string
}
export type PhotosType = {
    small: string,
    large: string
}
export type ProfileType = {
    aboutMe: string,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: string | undefined,
    photos: PhotosType
}
export type ProfilePageType = {
    posts: Array<PostType>
    profile: ProfileType | null
    status: string
}

let initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: 'Good post', likesCount: 15},
        {id: v1(), message: 'I love React', likesCount: 20},
        {id: v1(), message: 'I love JS', likesCount: 10},
    ],
    profile: null,
    status: ''
};
export const profileReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {

    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: v1(),
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_STATUS: {
            return {...state, status: action.status};
        }
        default:
            return state;
    }
};

//actionsCreators
export const addPost = (newPostText: string) => ({type: ADD_POST, newPostText} as const);
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const);
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const);

//thunkCreators
export const getUserProfile = (userId: string): ThunkType => {
    return (dispatch: ThunkDispatchUsers) => {
        usersAPI.getProfile(userId)
            .then((data) => {
                dispatch(setUserProfile(data));
            });
    }
};
export const getStatus = (userId: string): ThunkType => {
    return (dispatch: ThunkDispatchUsers) => {
        profileAPI.getStatus(userId)
            .then((response) => {
                dispatch(setStatus(response.data));
            });
    }
};
export const updateStatus = (status: string): ThunkType => {
    return (dispatch: ThunkDispatchUsers) => {
        profileAPI.updateStatus(status)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
    }
};
