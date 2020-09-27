import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';
import {DialogsPageType} from '../../redux/dialogs-reducer';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';

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

    const onSubmit = (formData: MessagesFormType) => {
        console.log(formData)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <MessagesReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
};

type MessagesFormType = {
    messageText: string
}

export const MessagesForm: React.FC<InjectedFormProps<MessagesFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'messageText'}/>
            </div>
            <div>
                <button>add message</button>
            </div>
        </form>
    )
}

const MessagesReduxForm = reduxForm<MessagesFormType>({form: 'messagesForm'})(MessagesForm)
