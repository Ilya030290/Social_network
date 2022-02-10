import React from 'react';
import s from './Dialogs.module.css';
import DialogItem, {DialogItemPropsType} from "./DialogItem/DialogItem";
import Message, {MessagePropsType} from "./Message/Message";

type DialogsPropsType = {
    dialogsData: Array<DialogItemPropsType>,
    messagesData: Array<MessagePropsType>
}

const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogsData.map( d => <DialogItem id={d.id} name={d.name} />);
    const messagesElements = props.messagesData.map( m => <Message id={m.id} message={m.message} />);

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