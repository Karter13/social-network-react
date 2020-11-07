import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {
    getStatus,
    getUserProfile,
    ProfileType,
    savePhoto,
    saveProfile,
    updateStatus
} from '../../redux/profile-reducer';
import {StateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {
    authorizedUserIdProfileSelector,
    isAuthProfileSelector,
    profileSelector,
    statusProfileSelector
} from '../../redux/profile-selectors';

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
    savePhoto: any
    saveProfile: (formData: ProfileType) => void
}
type ProfileAPIContainerPropsType = MapStatePropsType & MapDispatchPropsType
type ProfileContainerPropsType = RouteComponentProps<PathParamType> & ProfileAPIContainerPropsType & OwnPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    refreshProfile() {
        let userId = Number(this.props.match.params.userId);
        if (!userId) {
            userId = this.props.authorizedUserId || 0;
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

    componentDidMount(): void {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
            this.refreshProfile();
    }

    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}
            />
        )
    }
}

const mapStateToProps = (state: StateType): MapStatePropsType => {
    return ({
        profile: profileSelector(state),
        status: statusProfileSelector(state),
        authorizedUserId: authorizedUserIdProfileSelector(state),
        isAuth: isAuthProfileSelector(state)
    });
};

export default compose<React.ComponentClass>(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, StateType>
    (mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);


