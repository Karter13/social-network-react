import React from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';
import {DialogsPageType} from '../../redux/dialogs-reducer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Textarea} from '../common/FormControls/FormControls';
import {maxLengthCreator, required} from '../../utils/validators/validators';

type OwnFormPropsType = {
    addNewMessageText: (text: string) => void
}
type MapStatePropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchPropsType = {
    addMessage: (value: string) => void
}

export type DialogsPropsType = OwnFormPropsType
    & MapStatePropsType & MapDispatchPropsType

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

const maxLength100 = maxLengthCreator(100);

export const AddMessageForm: React.FC<InjectedFormProps<AddMessagesFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength100]}
                       name={'newMessageBody'}
                       placeholder={'Enter your message'} />
            </div>
            <div>
                <button>add message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessagesFormType>({form: 'dialogAddMessageForm'})(AddMessageForm);
