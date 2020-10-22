import {ActionsTypes} from './store';
import {ResultCodesEnum, usersAPI} from '../api/api';
import {StateType} from './redux-store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Dispatch} from 'redux';
import {updateObjectInArray} from '../utils/objects-helper';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'users/SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';

export type LocationType = {
    city: string
    country: string
}
export type PhotosType = {
    small: string
    large: string
}
export type UserType = {
    id: string
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location?: LocationType
}
export type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean,
    followingInProgress: Array<string>
}


let initialState: UsersPageType = {
    users: [],
    pageSize: 100,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

export const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            };
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_USERS_TOTAL_COUNT: {
            return {...state, totalUserCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }

};

//actionsCreators
export const followSuccess = (userId: string) => ({type: FOLLOW, userId: userId} as const);
export const unfollowSuccess = (userId: string) => ({type: UNFOLLOW, userId: userId} as const);
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users: users} as const);
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage: currentPage} as const);
export const setUsersTotalCount = (totalUsersCount: number) => ({
    type: SET_USERS_TOTAL_COUNT,
    totalUsersCount: totalUsersCount
} as const);
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching} as const);
export const toggleFollowingProgress = (isFetching: boolean, userId: string) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: isFetching,
    userId: userId
} as const);


//thunkCreators types
export type ThunkType = ThunkAction<void, StateType, unknown, ActionsTypes>;
export type ThunkDispatchUsers = ThunkDispatch<StateType, unknown, ActionsTypes>;
//thunkCreators
export const requestUsers = (page: number, pageSize: number): ThunkType => async (dispatch: ThunkDispatchUsers) => {
    dispatch(toggleIsFetching(true));

    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setUsersTotalCount(data.totalCount));
};
export const getPage = (pageNumber: number, pageSize: number): ThunkType => async (dispatch: ThunkDispatchUsers) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(pageNumber));

    let data = await usersAPI.getUsers(pageNumber, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
};

const followUnfollowFlow = async (dispatch: Dispatch, userId: string, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    let data = await apiMethod(userId);
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId: string): ThunkType => {
    return async (dispatch: ThunkDispatchUsers) => {
        let apiMethod = usersAPI.follow.bind(usersAPI);
        await followUnfollowFlow(dispatch, userId, apiMethod, followSuccess)
    }
};

export const unfollow = (userId: string): ThunkType => {
    return async (dispatch: ThunkDispatchUsers) => {
        let apiMethod = usersAPI.unfollow.bind(usersAPI);
        await followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess)
    }
};
