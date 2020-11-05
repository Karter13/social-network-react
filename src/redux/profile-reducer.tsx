import {v1} from 'uuid';
import {ActionsTypes} from './store';
import {profileAPI, ResultCodesEnum, usersAPI} from '../api/api';
import {ThunkDispatchUsers, ThunkType} from './users-reducer';
import {Dispatch} from 'redux';

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_STATUS';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

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
export const profileReducer = (state = initialState, action: ActionsTypes): any => {

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
        case DELETE_POST:{
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        default:
            return state;
    }
};

//actionsCreators
export const addPost = (newPostText: string) => ({type: ADD_POST, newPostText} as const);
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const);
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const);
export const deletePost = (postId: string) => ({type: DELETE_POST, postId} as const);
export const savePhotoSuccess = (photos: PhotosType) => ({type: SAVE_PHOTO_SUCCESS, photos} as const);

//thunkCreators
export const getUserProfile = (userId: number ): ThunkType => async (dispatch: ThunkDispatchUsers) => {
    let data = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(data));
};
export const getStatus = (userId: number): ThunkType => async (dispatch: ThunkDispatchUsers) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};
export const updateStatus = (status: string): ThunkType => async (dispatch: ThunkDispatchUsers) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(setStatus(status));
    }
};

export const savePhoto = (file: string): ThunkType => async (dispatch: Dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile: any): ThunkType => async (dispatch: Dispatch, getState: any) => {
    const userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === ResultCodesEnum.Success) {

        // dispatch(getUserProfile(userId));
    }
}
