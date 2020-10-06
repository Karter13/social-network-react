import {StateType} from './redux-store';

export const isAuthLoginSelector = (state: StateType) => {
    return state.auth.isAuth
};
