import {RenderEntireTreeType} from '../index';
import {v1} from 'uuid';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

//type of _state
export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type DialogType = {
    id: string
    name: string
    img: string
}
export type MessageType = {
    id: string
    message: string
}
export type FriendSidebarType = {
    id: string
    name: string
    img: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
export type SidebarType = {
    friends: Array<FriendSidebarType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

//type of methods
export type SubscribeType = (observer: RenderEntireTreeType) => void

//type of store
export type StoreType = {
    _state: RootStateType
    _callSubscriber: RenderEntireTreeType
    subscribe: SubscribeType
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = AddPostActionType
    | UpdateNewPostTextActionType
    | AddMessageActionType
    | UpdateNewMessageTextActionType

type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}
type UpdateNewMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newText: string
}


export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'Good post', likesCount: 15},
                {id: v1(), message: 'I love React', likesCount: 20},
                {id: v1(), message: 'I love JS', likesCount: 10},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {
                    id: v1(),
                    name: 'Friends1',
                    img: 'http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false'
                },
                {
                    id: v1(),
                    name: 'Friends2',
                    img: 'http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false'
                },
                {
                    id: v1(),
                    name: 'Friends3',
                    img: 'http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false'
                },
            ]
        }
    },
    _callSubscriber(state: RootStateType) {
        console.log('State changed');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost: PostType = {
                id: v1(),
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            if (newPost.message.trim()) {
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '';
            }
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage: MessageType = {
                id: v1(),
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};


export const addPostActionCreator = ():ActionsTypes => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text: string):ActionsTypes => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export const addMessageActionCreator = ():ActionsTypes => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text: string):ActionsTypes => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
});




