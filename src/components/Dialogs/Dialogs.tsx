import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type FormDataType = {
    newMessage: string
}

const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem key={d.id} id={d.id} name={d.name}/>);
    const messagesElements = props.dialogsPage.messages.map((m) => <Message key={m.id} id={m.id} message={m.message}/>);


    const addNewMessage = (formData: FormDataType) => {
        console.log(formData)
        props.sendMessage(formData.newMessage);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};


const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field component={'textarea'} name={'newMessage'} placeholder={'Enter your message'}/>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </div>
        </form>
    );
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;