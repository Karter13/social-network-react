import {Login, LoginPropsType} from './Login';
import React from 'react';

export default {
    title: 'Login component',
    component: Login
}

export const LoginBaseExample: React.FC<LoginPropsType> = () => {
    return <Login/>
}
