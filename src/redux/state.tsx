import {RenderEntireTreeType} from '../index';
import {v1} from 'uuid';

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
export type AddPostType = () => void;
export type UpdateNewPostTextType = (newText: string) => void;
export type AddMessageType = () => void
export type UpdateNewMessageTextType = (newText: string) => void
export type SubscribeType = (observer: RenderEntireTreeType) => void

//type of store
export type StoreType = {
    _state: RootStateType
    _callSubscriber: RenderEntireTreeType
    subscribe: SubscribeType
    getState: () => RootStateType
    updateNewPostText: UpdateNewPostTextType
    addPost: AddPostType
    updateNewMessageText: UpdateNewMessageTextType
    addMessage: AddMessageType
    dispatch: (action: any) => void

}

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType
type AddPostActionType = {
    type: 'UPDATE -NEW-POST-TEXT'
}
type UpdateNewPostTextActionType = {
    type: 'UPDATE -NEW-POST-TEXT'
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

    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addPost() {
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
    },

    updateNewMessageText(newText: string) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessage: MessageType = {
            id: v1(),
            message: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
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
        } else if (action.type === 'UPDATE -NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};


// let renderEntireTree = (state: RootStateType) => {
//     console.log('State changed');
// };

// export let state: RootStateType = {
//     profilePage: {
//         posts: [
//             {id: v1(), message: 'Good post', likesCount: 15},
//             {id: v1(), message: 'I love React', likesCount: 20},
//             {id: v1(), message: 'I love JS', likesCount: 10},
//         ],
//         newPostText: ''
//     },
//     dialogsPage: {
//         dialogs: [
//             {
//                 id: v1(),
//                 name: 'Maikl',
//                 img: "http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false"
//             },
//             {
//                 id: v1(),
//                 name: 'Anna',
//                 img: "http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false"
//             },
//             {
//                 id: v1(),
//                 name: 'Masha',
//                 img: "http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false"
//             },
//             {
//                 id: v1(),
//                 name: 'Aleksey',
//                 img: "http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false"
//             },
//         ],
//         messages: [
//             {id: v1(), message: 'Hello my friend'},
//             {id: v1(), message: 'Good morning'},
//             {id: v1(), message: 'Good by'},
//             {id: v1(), message: 'Yo'},
//         ],
//         newMessageText: ''
//     },
//     sidebar: {
//         friends: [
//             {
//                 id: v1(),
//                 name: 'Friends1',
//                 img: "http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false"
//             },
//             {
//                 id: v1(),
//                 name: 'Friends2',
//                 img: "http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false"
//             },
//             {
//                 id: v1(),
//                 name: 'Friends3',
//                 img: "http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false"
//             },
//         ]
//     }
// };

// export const addPost: AddPostType = () => {
//     let newPost: PostType = {
//         id: v1(),
//         message: state.profilePage.newPostText,
//         likesCount: 0,
//     };
//     if(newPost.message.trim()) {
//         state.profilePage.posts.push(newPost);
//         state.profilePage.newPostText = '';
//     }
//     renderEntireTree(state);
// };

// export const updateNewPostText: UpdateNewPostTextType = (newText: string) => {
//     state.profilePage.newPostText = newText;
//     renderEntireTree(state);
// };

// export const addMessage: AddMessageType = () => {
//     let newMessage: MessageType = {
//         id: v1(),
//         message: state.dialogsPage.newMessageText,
//     };
//     state.dialogsPage.messages.push(newMessage);
//     state.dialogsPage.newMessageText = '';
//     renderEntireTree(state);
// };

// export const updateNewMessageText: UpdateNewMessageTextType = (newText: string) => {
//     state.dialogsPage.newMessageText = newText;
//     renderEntireTree(state);
// };

// export const subscribe: SubscribeType = (observer: RenderEntireTreeType) => {
//     renderEntireTree = observer;
// };
