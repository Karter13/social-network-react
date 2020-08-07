import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {DispatchType, RootStateType} from '../../redux/store';
import {connect} from 'react-redux';


const mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
};
const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        addNewMessageText: (text: string) => {
            dispatch(updateNewMessageTextActionCreator(text));
        }
    }

};

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
