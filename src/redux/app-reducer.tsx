import {ThunkDispatchUsers, ThunkType} from './users-reducer';
import {getAuthUserData} from './auth-reducer';

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';

export type AppType = {
    initialized: boolean
    globalError: string | null
}
const initialState: AppType = {
    initialized: false,
    globalError: null
};
export const appReducer = (state = initialState, action: any): AppType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
};

//action
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS} as const);

//thunk
export const initializeApp = (): ThunkType => (dispatch: ThunkDispatchUsers) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        })
};
