import React from 'react';
import {addMessage, addNewMessageText} from '../../redux/dialogs-reducer';
import {Dialogs, DialogsPropsType} from './Dialogs';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {Redirect} from 'react-router';


const mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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
// };

const AUthRedirectComponent: React.FC<DialogsPropsType> = (props) => {
    if(!props.isAuth) return <Redirect to={'/login'}/>;
    return <Dialogs {...props}/>
};

export const DialogsContainer = connect(mapStateToProps, {addMessage, addNewMessageText})(AUthRedirectComponent);
