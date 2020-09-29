import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getStatus, getUserProfile, ProfileType, updateStatus} from '../../redux/profile-reducer';
import {StateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

type PathParamType = {
    userId: string | undefined
}
export type MapStatePropsTypeRedirect = {
    isAuth: boolean
}

type MapStatePropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: number | null,
    isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}
type ProfileAPIContainerPropsType = MapStatePropsType & MapStatePropsTypeRedirect & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamType> & ProfileAPIContainerPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId;
        debugger;
        if (!userId) {
            userId = '2'
            // userId = this.props.authorizedUserId
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
export default compose<any>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);

// let AUthRedirectComponent  = withAuthRedirect(ProfileContainer);
// const WithURLDataContainerComponent: any = withRouter(AUthRedirectComponent);
// export default connect(mapStateToProps, {getUserProfile})(WithURLDataContainerComponent);
