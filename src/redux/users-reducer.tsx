import {v1} from 'uuid';
import {ActionsTypes, UsersPageType, UserType} from './store';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
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

        case SET_USERS:{
            return {...state, users: [...state.users, ...action.users] }
        }

        default:
            return state;
    }

};

export const followAC = (userId: string) => ({type: FOLLOW, userId: userId} as const);
export const unfollowAC = (userId: string) => ({type: UNFOLLOW, userId: userId} as const);
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users: users} as const);
