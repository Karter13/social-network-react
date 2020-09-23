import React from 'react';
import style from './Login.module.css'

export type LoginPropsType = {}
export type LoginFormPropsType = {}

export const LoginForm: React.FC<LoginFormPropsType> = (props) => {
    return (
            <form action="">
                <div>
                    <input placeholder={'Login'}/>
                </div>
                <div>
                    <input placeholder={'Password'}/>
                </div>
                <div>
                    <input type={'checkbox'}/>remember me
                </div>
                <div>
                    <button>Login</button>
                </div>

            </form>
    )
};

export const Login: React.FC<LoginPropsType> = (props) => {
    return (
        <div>
            <h1 >LOGIN</h1>
            <LoginForm/>
        </div>
    )
};
