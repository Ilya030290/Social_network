import React from 'react';
import s from './Dialogs.module.css';
import DialogItem, {DialogItemPropsType} from "./DialogItem/DialogItem";
import Message, {MessagePropsType} from "./Message/Message";

type DialogsPropsType = {
    state: {
        dialogs: Array<DialogItemPropsType>,
        messages: Array<MessagePropsType>
    }
}

const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.state.dialogs.map( d => <DialogItem id={d.id} name={d.name} />);
    const messagesElements = props.state.messages.map( m => <Message id={m.id} message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;