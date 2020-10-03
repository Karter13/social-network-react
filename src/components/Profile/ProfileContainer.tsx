import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getStatus, getUserProfile, ProfileType, updateStatus} from '../../redux/profile-reducer';
import {StateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

type OwnPropsType = {}
//type for withRouter
type PathParamType = {
    userId: string
}
type MapStatePropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: number | null,
    isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}
type ProfileAPIContainerPropsType = MapStatePropsType & MapDispatchPropsType
type ProfileContainerPropsType = RouteComponentProps<PathParamType> & ProfileAPIContainerPropsType & OwnPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    //непонятки по поводу loading
    componentDidMount(): void {
        console.log(this.props)
        let userId = Number(this.props.match.params.userId);
        if (!userId) {
            userId = this.props.authorizedUserId || 0;
            if(!userId ) {
                this.props.history.push('/login');
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

    render() {

        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        )
    }
}

const mapStateToProps = (store: StateType): MapStatePropsType => ({
    profile: store.profilePage.profile,
    status: store.profilePage.status,
    authorizedUserId: store.auth.userId,
    isAuth: store.auth.isAuth
});

export default compose<React.ComponentClass>(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, StateType>(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);


