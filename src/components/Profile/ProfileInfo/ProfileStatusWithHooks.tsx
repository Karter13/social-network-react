import React from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}
type StateType = {
    editMode: boolean,
    status: string
}

export const ProfileStatusWithHooks: React.FC<ProfileStatusType> = (props) => {


    return (
        <div>
            {
                <div>
                    <span>{props.status || '--------'}</span>
                </div>
            }
            {false &&
            <div>
                <input autoFocus={true}
                       value={''}/>
            </div>
            }
        </div>
    )


};
