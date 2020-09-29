import {addMessage, DialogsPageType, dialogsReducer} from './dialogs-reducer';

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
    };

    const newMessageBody = 'Maikl'

    const action = addMessage(newMessageBody);
    const engState = dialogsReducer(startState, action);

    expect(engState.messages.length).toBe(5);
    expect(engState.messages[4].id).toBeTruthy();
});
