import React from 'react';
import {createField, Input, Textarea} from '../../common/FormControls/FormControls';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {ProfileType} from '../../../redux/profile-reducer';


// export type ProfileDataFormType = {
//     fullName: string
//     lookingForAJob: string
//     lookingForAJobDescription: boolean
//     aboutMe: string
// }
type PropsType = {
    profile: ProfileType
}


const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>

            <div>
                <button>save</button>
            </div>

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
            {/*<div>*/}
            {/*    <b>Contacts</b>: {(Object.keys(profile.contacts) as Array<keyof ContactsType>).map(key => {*/}
            {/*    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
            {/*})}*/}
            {/*</div>*/}
        </form>
    )
};

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({form: 'editProfile'})(ProfileDataForm);
export default ProfileDataFormReduxForm
