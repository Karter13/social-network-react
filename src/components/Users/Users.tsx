import React from 'react';
import {UserType} from '../../redux/users-reducer';
import styles from './Users.module.css'
import userPhoto from '../../assets/images/noavatar.png'
import {NavLink} from 'react-router-dom';
import {usersAPI} from '../../api/api';

export type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    follow: (usersId: string) => void
    unfollow: (usersId: string) => void
    onPageChanged: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: string) => void
    followingInProgress: Array<string>
}

//при типизации классовой компоненты первая позиция типизация пропсов вторая стэйта!!!
// пропсы в конструкторе также типизируются
export const Users: React.FC<UsersPropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.usersPage}>

            <div>
                {pages.map((page, i) => {
                    return <span key={i}
                                 className={props.currentPage === page ? styles.selectedPage : undefined}
                                 onClick={() => {
                                     props.onPageChanged(page);
                                 }}>{page}</span>
                })}
            </div>

            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                     alt="photo"
                                     className={styles.usersPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                                        props.toggleFollowingProgress(true, u.id);

                                        usersAPI.unfollow(u.id).then((data) => {
                                            if (data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }

                                            props.toggleFollowingProgress(false, u.id);
                                        });

                                    }}>Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                                        props.toggleFollowingProgress(true, u.id);

                                        usersAPI.follow(u.id).then((data) => {
                                            if (data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id);
                                        });

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
    )
};
