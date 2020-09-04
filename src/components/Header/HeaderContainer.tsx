import React from 'react';
import {Header} from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {setAuthUserData} from '../../redux/auth-reducer';

type MapStatePropsType = {}
type MapDispatchPropsType = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null) => void
}
type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount(): void {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    //вопрос с id
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }

    render() {
        return <Header {...this.props}/>
    }
}


const mapStateToProps = (state: StateType) => {
    return {}
};
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)


