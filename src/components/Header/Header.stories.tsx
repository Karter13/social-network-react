import {Header, HeaderPropsType} from './Header';
import {ReduxStoreProviderDecorator} from '../../stories/ReduxStoreProviderDecorator';
import React from 'react';

export default {
    title: 'Header container',
    component: Header,
    decorators: [ReduxStoreProviderDecorator]
}

export const HeaderBaseExample: React.FC<HeaderPropsType> = () => {
    return <Header isAuth={true} login={'UserName'} />
};
