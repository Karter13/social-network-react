import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {ProfileType, setUserProfile} from '../../redux/profile-reducer';
import {StateType} from '../../redux/redux-store';
import {withRouter, RouteComponentProps} from 'react-router-dom';

type PathParamType = {
    userId: string | undefined
}
type MapStatePropsType = {
    profile: ProfileType | null
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
type ProfileAPIContainerPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamType> & ProfileAPIContainerPropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then((response) => {
                this.props.setUserProfile(response.data);
            });

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


export default connect(mapStateToProps, {setUserProfile})(WithURLDataContainerComponent);
