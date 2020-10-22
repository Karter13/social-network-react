import React from 'react';
import {UserType} from '../../redux/users-reducer';
import styles from './Users.module.css'
import {Paginator} from '../common/Paginator/Paginator';
import {User} from './User';

export type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    follow: (usersId: string) => void
    unfollow: (usersId: string) => void
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<string>
}

export const Users: React.FC<UsersPropsType> = ({totalUserCount, pageSize, currentPage, onPageChanged, users, ...props}) => {

    return (
        <div className={styles.usersPage}>

            <Paginator currentPage={currentPage} totalUserCount={totalUserCount}
                       pageSize={pageSize} onPageChanged={onPageChanged}/>

            {
                users.map(u => <User user={u}
                                     key={u.id}
                                     followingInProgress={props.followingInProgress}
                                     unfollow={props.unfollow}
                                     follow={props.follow}
                    />
                )
            }
        </div>
    )
};
