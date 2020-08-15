import {v1} from 'uuid';
import {ActionsTypes} from './store';

type LocationType = {
    city: string
    country: string
}
type UserType = {
    id: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}
type UsersPageType = {
    users: Array<UserType>
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';



let initialState: UsersPageType = {
    users: [
       /* {
            id: v1(),
            followed: false,
            fullName: 'Maikl',
            status: 'I am a good boy',
            location: {city: 'Grodno', country: 'Belarus'}
        },
        {
            id: v1(),
            followed: true,
            fullName: 'Alex',
            status: 'I am a good boy too',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: v1(),
            followed: false,
            fullName: 'Tolia',
            status: 'I am a good boy too',
            location: {city: 'Moscow', country: 'Russia'}
        },*/

    ],
};

export const userReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {

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
