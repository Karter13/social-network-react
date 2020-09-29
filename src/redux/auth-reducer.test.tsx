import {authReducer, AuthType, setAuthUserData} from './auth-reducer';

test('correct get users data', () => {
    const startState: AuthType = {
        userId: null,
        email: null,
        login: null,
        isAuth: false
    };

    const userId = 10;
    const email = 'karamzin@mail.ru';
    const login = '12121212';
    const isAuth = true;


    const action = setAuthUserData(userId, email, login, isAuth);
    const endState = authReducer(startState, action);

    expect(endState.isAuth).toBeTruthy();
    expect(endState.userId).toBe(10);
    expect(endState.email).toBe('karamzin@mail.ru');
    expect(endState.login).toBe('12121212');
});
