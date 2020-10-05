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
        this.props.requestUsers(this.props.currentPage,this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getPage(pageNumber,this.props.pageSize);
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

//old version mapStateToProps
// const mapStateToProps = (state: StateType): MapStatePropsType => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUserCount: state.usersPage.totalUserCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// };

const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        // users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

//question fir <any>
export const UsersContainer = compose<any>(
    //TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, StateType>(mapStateToProps, {
        follow,
        unfollow,
        requestUsers,
        getPage
    })
)(UsersAPIContainer);
