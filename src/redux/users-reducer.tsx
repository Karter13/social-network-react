import {ActionsTypes, UsersPageType, UserType} from './store';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';


let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUserCount: 23,
    currentPage: 2
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

        case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.currentPage }
        }

        default:
            return state;
    }

};

export const followAC = (userId: string) => ({type: FOLLOW, userId: userId} as const);
export const unfollowAC = (userId: string) => ({type: UNFOLLOW, userId: userId} as const);
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users: users} as const);
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage: currentPage} as const);
