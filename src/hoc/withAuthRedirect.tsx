import React from 'react';
import {Redirect} from 'react-router';


export function withAuthRedirect <T extends {isAuth: boolean}>(Component: React.ComponentType<T>) {

    class RedirectComponent extends React.Component<T> {

        render()  {
            if(!this.props.isAuth) return <Redirect to={'/login'}/>;
            return <Component {...this.props}/>;
        }
    }
    return RedirectComponent;
}
