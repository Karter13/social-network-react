import React from 'react';
import {UserType} from '../../redux/users-reducer';
import styles from './Users.module.css'
import userPhoto from '../../assets/images/noavatar.png'
import {NavLink} from 'react-router-dom';

export type UserPropsType = {
    user: UserType
    follow: (usersId: string) => void
    unfollow: (usersId: string) => void
    followingInProgress: Array<string>
}

export const User: React.FC<UserPropsType> = ({user, followingInProgress, unfollow, follow}) => {
    return (

        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                             alt="photo"
                             className={styles.usersPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {
                        user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {

                                          unfollow(user.id)

                                      }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {

                                          follow(user.id)

                                      }}>Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                </span>
            </span>
        </div>
    )
};
