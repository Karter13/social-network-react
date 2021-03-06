import {v1} from 'uuid';
import {ActionsTypes} from './store';
import {profileAPI, ResultCodesEnum, usersAPI} from '../api/api';
import {stopSubmit} from 'redux-form';
import {ThunkAction} from 'redux-thunk';
import {StateType} from './redux-store';

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

//Type thunks
type ThunkActionType = ThunkAction<Promise<void>, StateType, unknown, ActionsTypes>

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
        case DELETE_POST: {
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
export const getUserProfile = (userId: number): ThunkActionType => async (dispatch) => {
    let data = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(data));
};
export const getStatus = (userId: number): ThunkActionType => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};
export const updateStatus = (status: string): ThunkActionType => async (dispatch) => {
    try {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === ResultCodesEnum.Success) {
            dispatch(setStatus(status));
        }
    } catch (e) {
        console.log(e.message)
    }
};

export const savePhoto = (file: string): ThunkActionType => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};

export const saveProfile = (profile: ProfileType): ThunkActionType => async (dispatch, getState)=> {
    try{
        const userId = getState().auth.userId;
        let response = await profileAPI.saveProfile(profile);
        if (response.data.resultCode === ResultCodesEnum.Success) {
            if(userId)  dispatch(getUserProfile(userId));

        } else {
            // dispatch<any>(stopSubmit('edit-profile', {'contacts': {'website': response.data.messages[0]} }));
            dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}));

            return Promise.reject(response.data.messages[0]);
        }
        return Promise.resolve()
    } catch (e) {
        return Promise.reject('error')
    }
};
