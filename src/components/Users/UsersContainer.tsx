import React from 'react';
import {connect} from 'react-redux';
import {follow, getPage, requestUsers, unfollow, UserType} from '../../redux/users-reducer';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {StateType} from '../../redux/redux-store';
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from '../../redux/users-selectors';

type OwnPropsType = {
    pageTitle: string
}
type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
}
type MapDispatchPropsType = {
    follow: (usersId: string) => void
    unfollow: (usersId: string) => void
    requestUsers: (currentPage: number, pageSize: number) => void
    getPage: (pageNumber: number, pageSize: number) => void
}
export type UsersAPIContainerPropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType

//при типизации классовой компоненты первая позиция типизация пропсов вторая стэйта!!!
// пропсы в конструкторе также типизируются
export class UsersAPIContainer extends React.Component<UsersAPIContainerPropsType> {

    componentDidMount(): void {
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props;
        this.props.getPage(pageNumber, pageSize);
    };

    render() {
        return <>
            <h2>{this.props.pageTitle}</h2>
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

const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export const UsersContainer = compose<any>(
    //TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, StateType>(mapStateToProps, {
        follow,
        unfollow,
        requestUsers,
        getPage
    })
)(UsersAPIContainer);
