import {ActionsTypes} from './store';
import {ResultCodesEnum, usersAPI} from '../api/api';
import {StateType} from './redux-store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

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
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
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
export const requestUsers = (page: number, pageSize: number): ThunkType => {
    return (dispatch: ThunkDispatchUsers) => {
        dispatch(toggleIsFetching(true));
        // dispatch(setCurrentPage(page));

        usersAPI.getUsers(page, pageSize).then((data) => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
        });
    }
};
export const getPage = (pageNumber: number, pageSize: number): ThunkType => {
    return (dispatch: ThunkDispatchUsers) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(pageNumber));

        usersAPI.getUsers(pageNumber, pageSize).then((data) => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
        });
    }
};
export const follow = (userId: string): ThunkType => {
    return (dispatch: ThunkDispatchUsers) => {

        dispatch(toggleFollowingProgress(true, userId));

        usersAPI.follow(userId)
            .then((data) => {
                if (data.resultCode === ResultCodesEnum.Success) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));
            });

    }
};
export const unfollow = (userId: string): ThunkType => {
    return (dispatch: ThunkDispatchUsers) => {

        dispatch(toggleFollowingProgress(true, userId));

        usersAPI.unfollow(userId)
            .then((data) => {
                if (data.resultCode === ResultCodesEnum.Success) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));
            });

    }
};
