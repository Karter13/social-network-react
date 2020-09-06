import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'bb249f66-6d8f-4cc5-9789-2a998b315ae1'
    },
});

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
};

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
};

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get('profile/' + userId)
            .then(response => response.data)
    }
};

export const unfollowAPI = {
    delUnfollow(id: string) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    }
};

export const followAPI = {
    postUnfollow(id: string) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    }
};
