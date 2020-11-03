import React from 'react';
import {ProfileType} from '../../../redux/profile-reducer';

type ProfileDataFormPropsType = {
    profile: ProfileType | null
}
export const ProfileDataForm: React.FC<ProfileDataFormPropsType> = ({profile}) => {
    return (
        profile && <div>
            Form
        </div>
    )
};
