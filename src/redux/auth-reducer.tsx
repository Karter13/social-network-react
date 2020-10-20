import {ActionsTypes} from './store';
import {ThunkDispatchUsers, ThunkType} from './users-reducer';
import {authPI, ResultCodesEnum} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_USERS_DATA = 'auth/SET_USERS_DATA';
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

//action
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USERS_DATA,
    payload: {userId, email, login, isAuth}
} as const);

//thunk
export const getAuthUserData = (): ThunkType => async (dispatch: ThunkDispatchUsers) => {
    let data = await authPI.me();
    if (data.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};
export const login = (email: string, password: string, rememberMe: boolean = false): ThunkType => async (dispatch: ThunkDispatchUsers) => {
    let data = await authPI.login(email, password, rememberMe);
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData())
    } else {
        let message = data.messages.length > 0 ? data.messages : 'Some error!!!';
        dispatch<any>(stopSubmit('login', {_error: message}));
    }
};
export const logout = (): ThunkType => async (dispatch: ThunkDispatchUsers) => {
    let data = await authPI.logout();
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(setAuthUserData(null, null, null, false))
    }
};
