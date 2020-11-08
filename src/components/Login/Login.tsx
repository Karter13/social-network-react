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
import {ProfileType} from '../../redux/profile-reducer';

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}



//captchaUrl types
export const LoginForm: React.FC<InjectedFormProps<FormDataType, OwnPropsType> & OwnPropsType> = ({handleSubmit, error, captchaUrl}) => {

    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {type: 'password'})}
            {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}

            {captchaUrl && <img src={captchaUrl} alt='captcha'/>}
            {captchaUrl && createField('Symbols from image', 'captcha', [required], Input, {})}


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

const LoginReduxForm = reduxForm<FormDataType, OwnPropsType>({form: 'login'})(LoginForm);

type OwnPropsType = {
   captchaUrl: string | null
}
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
}
type MapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string | null
}
type LoginPropsType = MapDispatchToPropsType & MapStateToPropsType & OwnPropsType

const Login: React.FC<LoginPropsType> = (props) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    {/*captchaUrl={props.captchaUrl} траблы с типизацией*/}
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
};

const mapStateToProps = (state: StateType): MapStateToPropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: isAuthLoginSelector(state)
});

export default connect<MapStateToPropsType,
    MapDispatchToPropsType,
    {},
    StateType>(mapStateToProps, {login})(Login)
