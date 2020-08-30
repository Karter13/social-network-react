import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {ProfileType, setUserProfile} from '../../redux/profile-reducer';
import {StateType} from '../../redux/redux-store';

type ProfileAPIContainerPropsType = {
    setUserProfile: (profile: any) => void
    profile: ProfileType | null
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


const mapStateToProps = (store: StateType) => ({
    profile: store.profilePage.profile
});

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileAPIContainer);
