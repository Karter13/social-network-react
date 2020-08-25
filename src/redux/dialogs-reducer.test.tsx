import {DialogsPageType} from './store';
import {addMessageActionCreator, dialogsReducer, updateNewMessageTextActionCreator} from './dialogs-reducer';

test('correct add message in array messages for dialogPage', () => {
    const startState: DialogsPageType = {
        dialogs: [
            {
                id: '1',
                name: 'Maikl',
                img: 'http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false'
            }
        ],
        messages: [
            {id: '1', message: 'Hello my friend'},
            {id: '2', message: 'Good morning'},
            {id: '2', message: 'Good by'},
            {id: '3', message: 'Yo'},
        ],
        newMessageText: ''
    };

    const action = addMessageActionCreator();
    const engState = dialogsReducer(startState, action);

    expect(engState.messages.length).toBe(5);
    expect(engState.messages[4].id).toBeTruthy();
});

test('correct add text to newMessageText for dialogPage', () => {
    const startState: DialogsPageType = {
        dialogs: [
            {
                id: '1',
                name: 'Maikl',
                img: 'http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false'
            }
        ],
        messages: [
            {id: '1', message: 'Hello my friend'},
            {id: '2', message: 'Good morning'},
            {id: '2', message: 'Good by'},
            {id: '3', message: 'Yo'},
        ],
        newMessageText: ''
    };

    const newText = 'text for test';

    const action = updateNewMessageTextActionCreator(newText);
    const engState = dialogsReducer(startState, action);

    expect(engState.newMessageText).toBe('text for test');
    expect(typeof (engState.newMessageText)).toBe('string');
});
