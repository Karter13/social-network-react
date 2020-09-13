import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';
import {DialogsPageType} from '../../redux/dialogs-reducer';
import { Redirect } from 'react-router-dom';

export type DialogsPropsType = {
    dialogsPage: DialogsPageType
    addMessage: () => void
    addNewMessageText: (text: string) => void
    isAuth: boolean
}
export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id} img={d.img}/>);
    let messagesElements = state.messages
        .map(m => <Message key={m.id} message={m.message}/>);


    const addMessage = () => {
        props.addMessage();
    };
    const addNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.addNewMessageText(e.currentTarget.value);
    };

    if(!props.isAuth) return <Redirect to={'/login'}/>;

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
