import {v1} from 'uuid';
import {ActionsTypes} from './store';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export type DialogType = {
    id: string
    name: string
    img: string
}
export type MessageType = {
    id: string
    message: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

let initialState: DialogsPageType = {
    dialogs: [
        {
            id: v1(),
            name: 'Maikl',
            img: 'http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false'
        },
        {
            id: v1(),
            name: 'Anna',
            img: 'http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false'
        },
        {
            id: v1(),
            name: 'Masha',
            img: 'http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false'
        },
        {
            id: v1(),
            name: 'Aleksey',
            img: 'http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false'
        },
    ],
    messages: [
        {id: v1(), message: 'Hello my friend'},
        {id: v1(), message: 'Good morning'},
        {id: v1(), message: 'Good by'},
        {id: v1(), message: 'Yo'},
    ],
    newMessageText: ''
};

export const dialogsReducer = (state = initialState, action: ActionsTypes): DialogsPageType => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage: MessageType = {
                id: v1(),
                message: state.newMessageText,
            };

            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: '',
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            }
        }
        default:
            return state;
    }
};

export const addMessage = () => ({type: ADD_MESSAGE} as const);
export const addNewMessageText = (text: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text} as const);
