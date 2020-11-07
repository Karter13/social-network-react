import React from 'react';
import style from './Login.module.css'
import {InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Input} from '../common/FormControls/FormControls';
import {required} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {StateType} from '../../redux/redux-store';
import {Redirect} from 'react-router-dom';
import {isAuthLoginSelector} from '../../redux/login-selectors';

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    error: string
}
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {type: 'password'})}
            {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}
            {
                error && <div className={style.formSummaryError}>
                    {error}
                </div>
            }
            <div>
                <button> Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm);

type OwnPropsType = {}
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}
type MapStateToPropsType = {
    isAuth: boolean
}
type LoginPropsType = MapDispatchToPropsType & MapStateToPropsType & OwnPropsType

const Login: React.FC<LoginPropsType> = (props) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

const mapStateToProps = (state: StateType): MapStateToPropsType => ({
    isAuth: isAuthLoginSelector(state)
});

export default connect<MapStateToPropsType,
    MapDispatchToPropsType,
    OwnPropsType,
    StateType>(mapStateToProps, {login})(Login)
