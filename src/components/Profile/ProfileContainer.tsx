import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, ProfileType} from '../../redux/profile-reducer';
import {StateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter, Redirect} from 'react-router-dom';

type PathParamType = {
    userId: string | undefined
}
type MapStatePropsType = {
    profile: ProfileType | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    // setUserProfile: (profile: ProfileType) => void
    getUserProfile: (userId: string) => void
}
type ProfileAPIContainerPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamType> & ProfileAPIContainerPropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2'
        }

        this.props.getUserProfile(userId);
    }

    render() {

        if(!this.props.isAuth) return <Redirect to={'/login'}/>;

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}


let WithURLDataContainerComponent = withRouter(ProfileContainer);

const mapStateToProps = (store: StateType): MapStatePropsType => ({
    profile: store.profilePage.profile,
    isAuth: store.auth.isAuth
});


export default connect(mapStateToProps, {getUserProfile})(WithURLDataContainerComponent);
