import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {setAuthUserData} from '../../redux/auth-reducer';
import {authPI} from '../../api/api';

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchPropsType = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null) => void
}
type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount(): void {

        authPI.me().then((data) => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
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
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)


