import {ActionsTypes} from './store';
import {ThunkDispatchUsers, ThunkType} from './users-reducer';
import {authPI, ResultCodesEnum} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_USERS_DATA = 'SET_USERS_DATA';
export type AuthType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
const initialState: AuthType = {
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
                ...action.payload,
            }
        }
        default:
            return state;
    }
};

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USERS_DATA,
    payload: {userId, email, login, isAuth}
} as const);

//THUNKS
export const getAuthUserData = (): ThunkType => (dispatch: ThunkDispatchUsers) => {
    authPI.me().then((data) => {
        if (data.resultCode === ResultCodesEnum.Success ) {
            let {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
};
export const login = (email: string, password: string, rememberMe: boolean = false): ThunkType => (dispatch: ThunkDispatchUsers) => {

    authPI.login(email, password, rememberMe)
        .then((data) => {
            if (data.resultCode === ResultCodesEnum.Success) {
                dispatch(getAuthUserData())
            } else {
                let message = data.messages.length > 0 ? data.messages : 'Some error!!!';
                dispatch<any>(stopSubmit('login', {_error: message}));
            }
        });
};
export const logout = (): ThunkType => (dispatch: ThunkDispatchUsers) => {
    authPI.logout()
        .then((data) => {
            if (data.resultCode === ResultCodesEnum.Success) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
};
