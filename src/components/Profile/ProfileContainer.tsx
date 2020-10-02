import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getStatus, getUserProfile, ProfileType, updateStatus} from '../../redux/profile-reducer';
import {StateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

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
type PropsType = RouteComponentProps<PathParamType> & ProfileAPIContainerPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        let userId = Number(this.props.match.params.userId);
        if (!userId && this.props.authorizedUserId) {
            userId = this.props.authorizedUserId
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

//question fir <any>
export default compose<React.ComponentClass>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);

// let AUthRedirectComponent  = withAuthRedirect(ProfileContainer);
// const WithURLDataContainerComponent: any = withRouter(AUthRedirectComponent);
// export default connect(mapStateToProps, {getUserProfile})(WithURLDataContainerComponent);
