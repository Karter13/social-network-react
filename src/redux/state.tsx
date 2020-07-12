import {v1} from "uuid";
import {RenderEntireTreeType} from "../index";
let renderEntireTree = (state: RootStateType) => {
    console.log('State changed');
};

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

export let state: RootStateType = {
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
                img: "http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false"
            },
            {
                id: v1(),
                name: 'Anna',
                img: "http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false"
            },
            {
                id: v1(),
                name: 'Masha',
                img: "http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false"
            },
            {
                id: v1(),
                name: 'Aleksey',
                img: "http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false"
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
                img: "http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false"
            },
            {
                id: v1(),
                name: 'Friends2',
                img: "http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false"
            },
            {
                id: v1(),
                name: 'Friends3',
                img: "http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false"
            },
        ]
    }
};

export type AddPostType = () => void;
export const addPost: AddPostType = () => {
    let newPost = {
        id: v1(),
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
};

export type UpdateNewPostTextType = (newText: string) => void;
export const updateNewPostText: UpdateNewPostTextType = (newText: string) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
};


export type AddMessageType = () => void
export const addMessage: AddMessageType = () => {
    let newMessage = {
        id: v1(),
        message: state.dialogsPage.newMessageText,
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    renderEntireTree(state);
};

export type UpdateNewMessageTextType = (newText: string) => void
export const updateNewMessageText: UpdateNewMessageTextType = (newText: string) => {
    state.dialogsPage.newMessageText = newText;
    renderEntireTree(state);
};


export type SubscribeType = (observer: RenderEntireTreeType) => void
export const subscribe: SubscribeType = (observer: RenderEntireTreeType) => {
    renderEntireTree = observer;
};
