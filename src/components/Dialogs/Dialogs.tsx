import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    name: string
    id: number
}
export const Dialog: React.FC<DialogPropsType> = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
};

type MessagePropsType = {
    message: string
}
export const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
};

type dialogType = {
    id: number
    name: string
}
type messageType = {
    id: number
    message: string
}
type DialogsPropsType = {}
export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const dialogs: Array<dialogType> = [
        {id: 1, name: 'Maikl'},
        {id: 2, name: 'Anna'},
        {id: 3, name: 'Masha'},
        {id: 4, name: 'Aleksey'},
    ];

    const message: Array<messageType> = [
        {id: 1, message: 'Hello my friend'},
        {id: 1, message: 'Good morning'},
        {id: 1, message: 'Good by'},
        {id: 1, message: 'Yo'},
    ];

    let dialogsElements = dialogs
        .map(d => <Dialog name={d.name} id={d.id}/>);
    let messagesElements = message.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
};
