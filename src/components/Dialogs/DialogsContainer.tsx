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


//question fir <any>
export const DialogsContainer = compose<any>(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect
)(Dialogs);


// const AUthRedirectComponent = withAuthRedirect(Dialogs);
// export const DialogsContainer = connect(mapStateToProps, {addMessage, addNewMessageText})(AUthRedirectComponent);
