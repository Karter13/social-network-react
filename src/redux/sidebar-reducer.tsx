import {ActionsTypes, SidebarType} from './store';
import {v1} from 'uuid';

let initialState = {
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
};

export const sidebarReducer = (state: SidebarType = initialState, action: ActionsTypes): SidebarType => {
    return state;
};
