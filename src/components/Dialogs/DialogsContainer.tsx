import React from 'react';
import {addMessage, addNewMessageText} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {RootStateType} from '../../redux/store';
import {connect} from 'react-redux';


const mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

//До оптимизации
// const mapDispatchToProps = (dispatch: DispatchType) => {
//     return {
//         addMessage: () => {
//             dispatch(addMessageActionCreator())
//         },
//         addNewMessageText: (text: string) => {
//             dispatch(updateNewMessageTextActionCreator(text));
//         }
//     }
//
// };


export const DialogsContainer = connect(mapStateToProps, {addMessage, addNewMessageText})(Dialogs);
