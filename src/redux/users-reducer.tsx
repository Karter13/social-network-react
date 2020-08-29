import {ActionsTypes, UsersPageType, UserType} from './store';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';



let initialState: UsersPageType = {
    users: [],
    pageSize: 100,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
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
            return {...state, users: action.users }
        }

        case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.currentPage }
        }

        case SET_USERS_TOTAL_COUNT: {
            return {...state, totalUserCount: action.totalUsersCount}
        }

        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }

        default:
            return state;
    }

};

export const follow = (userId: string) => ({type: FOLLOW, userId: userId} as const);
export const unfollow = (userId: string) => ({type: UNFOLLOW, userId: userId} as const);
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users: users} as const);
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage: currentPage} as const);
export const setUsersTotalCount = (totalUsersCount: number) => ({type: SET_USERS_TOTAL_COUNT, totalUsersCount: totalUsersCount} as const);
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching} as const);
