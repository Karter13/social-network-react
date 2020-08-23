import React from 'react';
import {UserType} from '../../redux/store';
import styles from './Users.module.css'
import axios from 'axios'
import userPhoto from '../../assets/images/noavatar.png'


export type UsersPropsType = {
    users: Array<UserType>
    follow: (usersId: string) => void
    unfollow: (usersId: string) => void
    setUsers: (users: Array<UserType>) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then((response) => {
                    props.setUsers(response.data.items);
                });
        }
    };


    return <div className={styles.usersPage}>
        <button onClick={getUsers}>getUsers</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="photo"
                             className={styles.usersPhoto}/>
                    </div>
                    <div>
                        {
                            u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                     <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>


            </div>)
        }
    </div>
};
