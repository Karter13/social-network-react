import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import { DialogItem } from './DialogItem/DialogItem';
import {DialogsPageType} from "../../redux/state";


type DialogsPropsType = {
    state: DialogsPageType
}
export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    console.log(props.state.dialogs);
    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>);
    let messagesElements = props.state.messages
        .map(m => <Message message={m.message}/>);

    let newMessageElement = React.createRef<any>();
    const addMessage = () => {
        let message = newMessageElement.current.value;
        alert(message)
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>add message</button>
                </div>
            </div>
        </div>
    )
};
