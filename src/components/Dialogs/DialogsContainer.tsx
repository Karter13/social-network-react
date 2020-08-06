import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {StoreContext} from '../../StoreContext';

type DialogsPropsType = {
}
export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage;

                const addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                };
                const addNewMessageText = (text: string) => {
                    store.dispatch(updateNewMessageTextActionCreator(text));
                };
                return <Dialogs addMessage={addMessage}
                                addNewMessageText={addNewMessageText}
                                dialogsPage={state}
                />
            }}
        </StoreContext.Consumer>
    )
};
