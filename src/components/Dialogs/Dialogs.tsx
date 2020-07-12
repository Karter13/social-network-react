import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from './DialogItem/DialogItem';
import {AddMessageType, DialogsPageType, updateNewMessageText, UpdateNewMessageTextType} from "../../redux/state";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    addMessage: AddMessageType
    updateNewMessageText: UpdateNewMessageTextType
}
export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>);
    let messagesElements = props.dialogsPage.messages
        .map(m => <Message message={m.message}/>);

    let newMessage = React.createRef<HTMLTextAreaElement>();
    const addMessage = () => {
        if (newMessage && newMessage.current) {
            props.addMessage();
        }
    };
    const addNewMessageText = () => {
        if (newMessage && newMessage.current) {
            let text = newMessage.current.value;
            props.updateNewMessageText(text);
        }
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
                              ref={newMessage}
                              value={props.dialogsPage.newMessageText}/>
                </div>
                <div>
                    <button onClick={addMessage}>add message</button>
                </div>
            </div>
        </div>
    )
};
