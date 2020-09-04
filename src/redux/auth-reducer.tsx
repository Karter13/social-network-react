import {ActionsTypes} from './store';

const SET_USERS_DATA = 'SET_USERS_DATA';

export type AuthType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: AuthType  = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};
export const authReducer = (state = initialState, action: ActionsTypes): AuthType => {
    switch (action.type) {
        case SET_USERS_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }

};

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null) => ({
    type: SET_USERS_DATA,
    data: {userId, email, login}} as const);
