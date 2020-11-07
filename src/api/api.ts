import axios from 'axios';
import {PhotosType} from '../redux/users-reducer';
import {ProfileType} from '../redux/profile-reducer';
import {BACK_URL} from './config';

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

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

type CommonResponseType<T = {}> = {
    resultCode: ResultCodesEnum
    messages: Array<string>
    data: T
}

const instance = axios.create({
    withCredentials: true,
    baseURL: BACK_URL,
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
        return instance.post<CommonResponseType>(`follow/${id}`)
            .then(response => response.data);
    },
    unfollow(id: string) {
        return instance.delete<CommonResponseType>(`follow/${id}`)
            .then(response => response.data);
    },
    getProfile(userId: number) {
        console.warn('Obsolete method. Please profileAPI object');
        return profileAPI.getProfile(userId);
    },
};

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>('profile/' + userId)
            .then(response => response.data);
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/` + userId);
    },
    updateStatus(status: string) {
        return instance.put<CommonResponseType>(`profile/status/`, {status: status});
    },
    savePhoto(photoFile: string) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put<any>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile: any) {
        return instance.put<CommonResponseType>(`profile`, profile);
    }

};

export const authPI = {
    me() {
        return instance.get<CommonResponseType<AuthType>>(`auth/me`)
            .then(response => response.data);
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<CommonResponseType<{ userId: number }>>(`auth/login`,
            {email, password, rememberMe})
            .then(response => response.data);
    },
    logout() {
        return instance.delete<CommonResponseType>(`auth/login`)
            .then(response => response.data);
    }

};

