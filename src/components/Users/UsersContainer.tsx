import React from 'react';
import {connect} from 'react-redux';
import {Users} from './Users';
import {DispatchType, RootStateType, UserType} from '../../redux/store';
import {followAC, setUsersAC, unfollowAC} from '../../redux/users-reducer';

const mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users
    }
};
const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        follow: (usersId: string) => {
            dispatch(followAC(usersId))
        },
        unfollow: (usersId: string) => {
            dispatch(unfollowAC(usersId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
