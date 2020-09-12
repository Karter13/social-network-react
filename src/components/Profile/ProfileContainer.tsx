import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, ProfileType, setUserProfile} from '../../redux/profile-reducer';
import {StateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {usersAPI} from '../../api/api';

type PathParamType = {
    userId: string | undefined
}
type MapStatePropsType = {
    profile: ProfileType | null
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
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}


let WithURLDataContainerComponent = withRouter(ProfileContainer);

const mapStateToProps = (store: StateType): MapStatePropsType => ({
    profile: store.profilePage.profile
});


export default connect(mapStateToProps, {getUserProfile})(WithURLDataContainerComponent);
