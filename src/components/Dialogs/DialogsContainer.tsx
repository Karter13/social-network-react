import React from 'react';
import {addMessage} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {getdialogsPage} from '../../redux/dialogs-selectors';

const mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: getdialogsPage(state)
    }
};

const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect
)(Dialogs);

export default DialogsContainer;
