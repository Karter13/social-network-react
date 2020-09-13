import React from 'react';
import {Dialogs, DialogsPropsType} from './Dialogs';
import {ReduxStoreProviderDecorator} from '../../stories/ReduxStoreProviderDecorator';
import {v1} from 'uuid';
import {action} from '@storybook/addon-actions';


export default {
    title: 'DialogItem container',
    component: Dialogs,
    decorators: [ReduxStoreProviderDecorator]
}

const AddMessagesCallback = action('Value Messages');
const AddNewMessageTextCallback = action('Value NewMessagesText');

export const DialogsBaseExample: React.FC<DialogsPropsType> = (props) => {
    return (
        <Dialogs isAuth={true}
                 dialogsPage={
                     {
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
                     }
                 }
                 addMessage={AddMessagesCallback}
                 addNewMessageText={AddNewMessageTextCallback}/>
    )
};
