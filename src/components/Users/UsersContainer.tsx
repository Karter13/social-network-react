import React from 'react';
import {connect} from 'react-redux';
import {follow, getPage, getUsers, toggleFollowingProgress, unfollow, UserType} from '../../redux/users-reducer';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {StateType} from '../../redux/redux-store';

export type UsersAPIContainerPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    follow: (usersId: string) => void
    unfollow: (usersId: string) => void
    isFetching: boolean
    toggleFollowingProgress: (isFetching: boolean, userId: string) => void
    followingInProgress: Array<string>
    getUsers: (currentPage: number, pageSize: number) => void
    getPage: (pageNumber: number, pageSize: number) => void
}

//при типизации классовой компоненты первая позиция типизация пропсов вторая стэйта!!!
// пропсы в конструкторе также типизируются
export class UsersAPIContainer extends React.Component<UsersAPIContainerPropsType> {

    componentDidMount(): void {

        this.props.getUsers(this.props.currentPage,this.props.pageSize);

       /* this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setUsersTotalCount(data.totalCount);
        });*/
    }

    onPageChanged = (pageNumber: number) => {

        this.props.getPage(pageNumber,this.props.pageSize)

       /* this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);

        usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });*/
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
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
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

// const mapDispatchToProps = (dispatch: DispatchType) => {
//     return {
//         follow: (usersId: string) => {
//             dispatch(followAC(usersId))
//         },
//         unfollow: (usersId: string) => {
//             dispatch(unfollowAC(usersId))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetcing: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetcing))
//         }
//     }
// };

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    toggleFollowingProgress,
    getUsers,
    getPage
})(UsersAPIContainer);
