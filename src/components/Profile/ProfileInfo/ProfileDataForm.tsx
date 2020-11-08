import React from 'react';
import s from './ProfileInfo.module.css'
import {createField, Input, Textarea} from '../../common/FormControls/FormControls';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {ContactsType, ProfileType} from '../../../redux/profile-reducer';
import style from '../../Login/Login.module.css';

type PropsType = {
    profile: ProfileType
}
const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({handleSubmit, profile, error}) => {

    return (
        <form onSubmit={handleSubmit}>

            <div>
                <button>save</button>
            </div>

            {
                error && <div className={style.formSummaryError}>
                    {error}
                </div>
            }

            <div>
                <b>FullName:</b>
                {createField('FullName', 'fullName', [], Input)}
            </div>
            <div>
                <b>LookingForAJob:</b>
                {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
            </div>

            <div>
                <b>My professional skills:</b>
                {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
            </div>

            <div>
                <b>About me:</b>
                {createField('About me', 'aboutMe', [], Textarea)}
            </div>
            <div>
                <b>Contacts</b>: {(Object.keys(profile.contacts) as Array<keyof ContactsType>).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b>
                </div>
            })}
            </div>
        </form>
    )
};

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({form: 'edit-profile'})(ProfileDataForm);
export default ProfileDataFormReduxForm
