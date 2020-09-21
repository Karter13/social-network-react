import React from 'react';
import s from './ProfileInfo.module.css'

type ProfileStatusType = {
    status: string
}

export const ProfileStatus: React.FC<ProfileStatusType> = (props) => {
    return (
        <div>
            <div>
                <span>{props.status}</span>
            </div>
            <div>
                <input value={props.status}/>
            </div>

        </div>
    )
};
