import {StateType} from './redux-store';

export const isAuthSelector = (state: StateType) => {
    return state.auth.isAuth
};

export const loginSelector = (state: StateType) => {
    return state.auth.login
};
