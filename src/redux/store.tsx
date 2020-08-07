// import {RenderEntireTreeType} from '../index';
import {v1} from 'uuid';
import {addPostActionCreator, profileReducer, updateNewPostTextActionCreator} from './profile-reducer';
import {addMessageActionCreator, dialogsReducer, updateNewMessageTextActionCreator} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';

//type of _state
export type DispatchType = (action: ActionsTypes) => void
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
export type SubscribeType = (observer: any) => void

//type of store
export type StoreType = {
    _state: RootStateType
    _callSubscriber: any
    subscribe: SubscribeType
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewMessageTextActionCreator>


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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};






