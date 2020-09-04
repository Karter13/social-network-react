import {ActionsTypes} from './store';

const SET_USERS_DATA = 'SET_USERS_DATA';

export type AuthType = {
    id: number | null,
    email: string | null,
    login: string | null
}

const initialState: AuthType  = {
    id: null,
    email: null,
    login: null
};
export const authReducer = (state = initialState, action: ActionsTypes): AuthType => {
    switch (action.type) {
        case SET_USERS_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state;
    }

};

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null) => ({
    type: SET_USERS_DATA,
    data: {userId, email, login}} as const);
