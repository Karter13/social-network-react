import axios from 'axios';
import {PhotosType} from '../redux/users-reducer';
import {ProfileType} from '../redux/profile-reducer';

type UserType = {
    id: string
    photos: PhotosType
    followed: boolean
    name: string
    status: string
}
type AuthType = {
    id: number | null
    email: string | null
    login: string | null
}
type APIUsersType = {
    items: Array<UserType>
    totalCount: number
    error: null | string
}

type CommonResponseType<T> = {
    resultCode: 1 | 0
    messages: Array<string>
    data: T
}

// type APIFollowType = {
//     resultCode: 1 | 0
//     messages: Array<string>
//     data: {}
// }
//
// type APIAuthPI = {
//     resultCode: 1 | 0
//     messages: Array<string>
//     data: AuthType
// }

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'bb249f66-6d8f-4cc5-9789-2a998b315ae1'
    },
});

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<APIUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(id: string) {
        return instance.post<CommonResponseType<{}>>(`follow/${id}`)
            .then(response => response.data)
    },
    unfollow(id: string) {
        return instance.delete<CommonResponseType<{}>>(`follow/${id}`)
            .then(response => response.data)
    },
    getProfile(userId: string) {
        console.warn('Obsolete method. Please profileAPI object');
        return profileAPI.getProfile(userId)
    },
};

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get<ProfileType>('profile/' + userId)
            .then(response => response.data)
    },
    getStatus(userId: string) {
        return instance.get(`/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`/status/`, {status: status} );
    }
};

export const authPI = {
    me() {
        return instance.get<CommonResponseType<AuthType>>(`auth/me`)
            .then(response => response.data)
    },
};

