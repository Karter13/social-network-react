import React from 'react';
import {Redirect} from 'react-router';
import {StateType} from '../redux/redux-store';
import {connect} from 'react-redux';


const mapStateToPropsRedirect = (store: StateType) => ({
    isAuth: store.auth.isAuth
});

export function withAuthRedirect (Component: React.ComponentType<any>) {

    class RedirectComponent extends React.Component<any> {

        render()  {
            if(!this.props.isAuth) return <Redirect to={'/login'}/>;
            return <Component {...this.props}/>;
        }
    }

    let ConnectedAUthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent);

    return ConnectedAUthRedirectComponent;
}
