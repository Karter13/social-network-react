import {v1} from "uuid";
import {renderEntireTree} from "../render";

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
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
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
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: v1(), name: 'Maikl', img: "http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false"},
            {id: v1(), name: 'Anna', img: "http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false"},
            {id: v1(), name: 'Masha', img: "http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false"},
            {id: v1(), name: 'Aleksey', img: "http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false"},
        ],
        messages: [
            {id: v1(), message: 'Hello my friend'},
            {id: v1(), message: 'Good morning'},
            {id: v1(), message: 'Good by'},
            {id: v1(), message: 'Yo'},
        ]
    },
    sidebar: {
        friends: [
            {id: v1(), name: 'Friends1', img: "http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false"},
            {id: v1(), name: 'Friends2', img: "http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false"},
            {id: v1(), name: 'Friends3', img: "http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false"},
        ]
    }
};

export type AddPostType = (newMessage:string) => void;
export const addPost: AddPostType = (newMessage:string) => {
    let newPost = {
        id: v1(),
        message: newMessage,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    renderEntireTree(state);
};


