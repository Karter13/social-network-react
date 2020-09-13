import React from 'react';
import {Message, MessagePropsType} from './Message';

export default {
    title: 'Message container',
    component: Message
}

export const MessageBaseExample: React.FC<MessagePropsType> = (props) => {
    return (
        <Message key={'1'} message={'I love React'}/>
    )
};

