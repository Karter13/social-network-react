import {appReducer, initializedSuccess} from './app-reducer';

test('correct initialized app', () => {
    const startState = {
        initialized: false
    };

    const action = initializedSuccess();
    const endState = appReducer(startState, action);

    expect(endState.initialized).toBeTruthy()
});
