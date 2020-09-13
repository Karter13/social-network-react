import React from 'react';
import {DialogItem, DialogPropsType} from './DialogItem';
import {ReduxStoreProviderDecorator} from '../../../stories/ReduxStoreProviderDecorator';

export default {
    title: 'DialogItem container',
    component: DialogItem,
    decorators: [ReduxStoreProviderDecorator]
}

export const MessageBaseExample: React.FC<DialogPropsType> = (props) => {
    return (
        <DialogItem
            id={'1'}
            name={'Maikl'}
            img={'http://avatars.mds.yandex.net/get-pdb/1245924/bc43f857-5d36-4e10-a9e1-4f838cbb5753/s1200?webp=false'}/>
    )
};


