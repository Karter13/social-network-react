import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/store';
import {setUserProfile} from '../../redux/profile-reducer';

type ProfileAPIContainerPropsType = {
    setUserProfile: (profile: any) => void
    profile: any
}

export class ProfileAPIContainer extends React.Component<ProfileAPIContainerPropsType> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/9342`)
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


const mapStateToProps = (store: RootStateType) => ({
    profile: store.profilePage.profile
});

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileAPIContainer);
