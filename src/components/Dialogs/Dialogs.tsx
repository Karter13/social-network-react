import React from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';
import {DialogsPageType} from '../../redux/dialogs-reducer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

export type DialogsPropsType = {
    dialogsPage: DialogsPageType
    addMessage: (formData: string) => void
    addNewMessageText: (text: string) => void
    isAuth: boolean
}
export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id} img={d.img}/>);
    let messagesElements = state.messages
        .map(m => <Message key={m.id} message={m.message}/>);


    const addNewMessage = (formData: AddMessagesFormType) => {
        props.addMessage( formData.newMessageBody );
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
};

type AddMessagesFormType = {
    newMessageBody: string
}

export const AddMessageForm: React.FC<InjectedFormProps<AddMessagesFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your message'} />
            </div>
            <div>
                <button>add message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessagesFormType>({form: 'dialogAddMessageForm'})(AddMessageForm);
