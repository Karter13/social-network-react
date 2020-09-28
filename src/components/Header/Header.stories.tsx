import {Header, HeaderPropsType} from './Header';
import {ReduxStoreProviderDecorator} from '../../stories/ReduxStoreProviderDecorator';
import React from 'react';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Header container',
    component: Header,
    decorators: [ReduxStoreProviderDecorator]
}

const HeaderStatusCallback = action('HeaderStatus');

export const HeaderBaseExample: React.FC<HeaderPropsType> = () => {
    return <Header isAuth={true} login={'UserName'} logout={HeaderStatusCallback} />
};
