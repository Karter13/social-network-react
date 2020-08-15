import React from 'react';
import {UserType} from '../../redux/store';
import styles from './Users.module.css'


export type UsersPropsType = {
    users: Array<UserType>
    follow: (usersId: string) => void
    unfollow: (usersId: string) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} alt="photo" className={styles.usersPhoto}/>
                    </div>
                    <div>
                        <button>Follow</button>
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.followed}</div>
                    </span>
                     <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>


            </div>)
        }
    </div>
};
