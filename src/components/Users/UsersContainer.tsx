import React from 'react';
import {connect} from 'react-redux';
import {follow, getPage, getUsers, toggleFollowingProgress, unfollow, UserType} from '../../redux/users-reducer';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {StateType} from '../../redux/redux-store';
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

export type UsersAPIContainerPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    follow: (usersId: string) => void
    unfollow: (usersId: string) => void
    isFetching: boolean
    followingInProgress: Array<string>
    getUsers: (currentPage: number, pageSize: number) => void
    getPage: (pageNumber: number, pageSize: number) => void
}

//при типизации классовой компоненты первая позиция типизация пропсов вторая стэйта!!!
// пропсы в конструкторе также типизируются
export class UsersAPIContainer extends React.Component<UsersAPIContainerPropsType> {

    componentDidMount(): void {

        this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {

        this.props.getPage(pageNumber,this.props.pageSize);
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

//question fir <any>
export const UsersContainer = compose<any>(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        getUsers,
        getPage
    })
)(UsersAPIContainer);

// export const UsersContainer = connect(mapStateToProps, {
//     follow,
//     unfollow,
//     getUsers,
//     getPage
// })(UsersAPIContainer);
