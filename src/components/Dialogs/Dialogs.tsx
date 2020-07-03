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


type DialogsPropsType = {}
export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name='Maikl' id={1}/>
                <Dialog name='Anna' id={2}/>
                <Dialog name='Masha' id={3}/>
                <Dialog name='Aleksey' id={4}/>
            </div>
            <div className={s.messages}>
                <Message message='Hello my friend'/>
                <Message message='Good morning'/>
                <Message message='Good by'/>
                <Message message='Yo'/>

            </div>
        </div>
    )
};
