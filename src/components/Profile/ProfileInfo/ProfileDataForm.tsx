import React from 'react';
import {ContactsType, ProfileType} from '../../../redux/profile-reducer';

type ProfileDataFormPropsType = {
    profile: ProfileType | null
}
export const ProfileDataForm: React.FC<ProfileDataFormPropsType> = ({profile}) => {
    return (
        profile && <form>

            <div><button  onClick={() => {}}>save</button></div>

            <div>
                <b>FullName:</b>{}
            </div>
            <div>
                <b>LookingForAJob:</b>{}
            </div>

            <div>
                <b>My professional skills:</b>{}
            </div>

            <div>
                <b>About me:</b>{}
            </div>
            {/*<div>*/}
            {/*    <b>Contacts</b>: {(Object.keys(profile.contacts) as Array<keyof ContactsType>).map(key => {*/}
            {/*    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
            {/*})}*/}
            {/*</div>*/}
        </form>
    )
};
