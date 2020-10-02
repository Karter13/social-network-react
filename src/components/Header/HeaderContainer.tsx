import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {getAuthUserData, logout} from '../../redux/auth-reducer';

type OwnPropsType = {}
type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchPropsType = {
    getAuthUserData: () => void
    logout: () => void
}
type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount(): void {
        this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: StateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
};
export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, StateType>(mapStateToProps, {getAuthUserData, logout})(HeaderContainer)


