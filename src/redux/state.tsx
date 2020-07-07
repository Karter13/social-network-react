export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
    img: string
}
export type MessageType = {
    id: number
    message: string
}
export type FriendSidebarType = {
    id: number
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
            {id: 1, message: 'Good post', likesCount: 15},
            {id: 2, message: 'I love React', likesCount: 20},
            {id: 3, message: 'I love JS', likesCount: 10},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Maikl', img: "http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false"},
            {id: 2, name: 'Anna', img: "http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false"},
            {id: 3, name: 'Masha', img: "http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false"},
            {id: 4, name: 'Aleksey', img: "http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false"},
        ],
        messages: [
            {id: 1, message: 'Hello my friend'},
            {id: 1, message: 'Good morning'},
            {id: 1, message: 'Good by'},
            {id: 1, message: 'Yo'},
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Friends1', img: "http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false"},
            {id: 2, name: 'Friends2', img: "http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false"},
            {id: 3, name: 'Friends3', img: "http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false"},
        ]
    }

};
