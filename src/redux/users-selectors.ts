import {StateType} from './redux-store';
import {createSelector} from 'reselect';

//using Reselect for getting users
export const getUsersSelector = (state: StateType) => {
    return state.usersPage.users;
};
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true);
});

export const getPageSize = (state: StateType) => {
    return state.usersPage.pageSize;
};
export const getTotalItemsCount = (state: StateType) => {
    return state.usersPage.totalItemsCount;
};
export const getCurrentPage = (state: StateType) => {
    return state.usersPage.currentPage;
};
export const getIsFetching = (state: StateType) => {
    return state.usersPage.isFetching;
};
export const getFollowingInProgress = (state: StateType) => {
    return state.usersPage.followingInProgress;
};

