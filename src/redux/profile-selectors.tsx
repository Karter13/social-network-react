import {StateType} from './redux-store';

//selectors for ProfileContainer
export const profileSelector = (state: StateType) => {
    return state.profilePage.profile
};
export const statusProfileSelector = (state: StateType) => {
    return state.profilePage.status
};
export const authorizedUserIdProfileSelector = (state: StateType) => {
    return state.auth.userId
};
export const isAuthProfileSelector = (state: StateType) => {
    return state.auth.isAuth
};

//selectors for MyPostContainer
export const postsSelector = (state: StateType) => {
    return state.profilePage.posts
};
