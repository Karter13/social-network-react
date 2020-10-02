import React from 'react';
import {addMessage} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


const mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect
)(Dialogs);
