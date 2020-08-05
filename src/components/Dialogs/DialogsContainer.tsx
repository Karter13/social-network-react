import React from 'react';
import {StoreType,} from '../../redux/store';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';

type DialogsPropsType = {
    store: StoreType
}
export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

    let state = props.store.getState().dialogsPage;

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };
    const addNewMessageText = (text: string) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    };

    return (
        <Dialogs addMessage={addMessage}
                 addNewMessageText={addNewMessageText}
                 dialogsPage={state}
        />
    )
};
