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

class Users extends React.Component {


}
