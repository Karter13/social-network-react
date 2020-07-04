export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostType>
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
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
            {id: 1, name: 'Maikl'},
            {id: 2, name: 'Anna'},
            {id: 3, name: 'Masha'},
            {id: 4, name: 'Aleksey'},
        ],
        messages: [
            {id: 1, message: 'Hello my friend'},
            {id: 1, message: 'Good morning'},
            {id: 1, message: 'Good by'},
            {id: 1, message: 'Yo'},
        ]
    }

};
