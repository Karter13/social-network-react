import {ActionsTypes} from './store';
import {ThunkDispatchUsers, ThunkType} from './users-reducer';
import {authAPI, ResultCodesEnum, securityAPI} from '../api/api';
import {stopSubmit} from 'redux-form';
import {Dispatch} from 'redux';

const SET_USERS_DATA = 'auth/SET_USERS_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

export type AuthType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
}
const initialState: AuthType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null//if null captcha is not required
};
export const authReducer = (state = initialState, action: ActionsTypes): AuthType => {
    switch (action.type) {
        case SET_USERS_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
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

export const getCaptchaUrlSuccess = (captchaUrl: string | null) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
} as const);


//thunk
export const getAuthUserData = (): ThunkType => async (dispatch: ThunkDispatchUsers) => {
    let data = await authAPI.me();
    if (data.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};
export const login = (email: string, password: string, rememberMe: boolean = false, captcha: string | null): ThunkType => async (dispatch: ThunkDispatchUsers) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === ResultCodesEnum.Success) {
        //success. get auth data
        dispatch(getAuthUserData())
    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptchaUrl)
        }

        //reduxForm action creator for error (from 'redux-form';)
        let message = data.messages.length > 0 ? data.messages : 'Some error!!!';
        dispatch<any>(stopSubmit('login', {_error: message}));
    }
};

export const getCaptchaUrl = () => async (dispatch: Dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
};

export const logout = (): ThunkType => async (dispatch: ThunkDispatchUsers) => {
    let data = await authAPI.logout();
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(setAuthUserData(null, null, null, false))
    }
};
