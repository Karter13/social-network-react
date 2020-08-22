import React from 'react';
import {UserType} from '../../redux/store';
import styles from './Users.module.css'
import {v1} from 'uuid';
import axios from 'axios'


export type UsersPropsType = {
    users: Array<UserType>
    follow: (usersId: string) => void
    unfollow: (usersId: string) => void
    setUsers: (users: Array<UserType>) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {

    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
            debugger;
            console.log(response.data.items);
            props.setUsers(response.data.items);
        });

        // props.setUsers([
        //     {
        //         id: v1(),
        //         photoUrl: 'https://chitayutvse.ru/upload/vk/img/4338_D1Itz_TUvvA.jpg',
        //         followed: false,
        //         fullName: 'Maikl',
        //         status: 'I am a good boy',
        //         location: {city: 'Grodno', country: 'Belarus'}
        //     },
        //     {
        //         id: v1(),
        //         photoUrl: 'https://chitayutvse.ru/upload/vk/img/4338_D1Itz_TUvvA.jpg',
        //         followed: true,
        //         fullName: 'Alex',
        //         status: 'I am a good boy too',
        //         location: {city: 'Minsk', country: 'Belarus'}
        //     },
        //     {
        //         id: v1(),
        //         photoUrl: 'https://chitayutvse.ru/upload/vk/img/4338_D1Itz_TUvvA.jpg',
        //         followed: false,
        //         fullName: 'Tolia',
        //         status: 'I am a good boy too',
        //         location: {city: 'Moscow', country: 'Russia'}
        //     },
        // ]);
    }

    return <div className={styles.usersPage}>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} alt="photo" className={styles.usersPhoto}/>
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
