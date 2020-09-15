import {Navbar} from './Navbar';
import {ReduxStoreProviderDecorator} from '../../stories/ReduxStoreProviderDecorator';
import React from 'react';

export default {
    title: 'Navbar component',
    component: Navbar,
    decorators: [ReduxStoreProviderDecorator]
}

export const NavbarBaseExample = () => {
    return <Navbar/>
};
