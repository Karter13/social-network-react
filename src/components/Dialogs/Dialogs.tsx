import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';
import {
    ActionsTypes,
    DialogsPageType,
} from '../../redux/store';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch:(action: ActionsTypes) => void
}
export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id} img={d.img}/>);
    let messagesElements = props.dialogsPage.messages
        .map(m => <Message key={m.id} message={m.message}/>);


    const addMessage = () => {
            props.dispatch(addMessageActionCreator());
    };
    const addNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.dispatch(updateNewMessageTextActionCreator(e.currentTarget.value));
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={addNewMessageText}
                              value={props.dialogsPage.newMessageText}
                    />
                </div>
                <div>
                    <button onClick={addMessage}>add message</button>
                </div>
            </div>
        </div>
    )
};
