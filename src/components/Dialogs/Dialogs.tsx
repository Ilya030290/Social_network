import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Button} from "@mui/material";


const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem key={d.id} id={d.id} name={d.name} />);
    const messagesElements = props.dialogsPage.messages.map((m) => <Message key={m.id} id={m.id} message={m.message} />);

    const newMessageBody = props.dialogsPage.newMessageBody;

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body);

    }

    const onSendMessageClick = () => {
        props.sendMessage();
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
                <div>
                    <div>
                        <textarea
                            style={{minHeight: '80px', minWidth: '200px'}}
                            onChange={onNewMessageChange}
                            value={newMessageBody}
                            placeholder={'Enter your message'}>
                        </textarea>
                    </div>
                    <div>
                        <Button variant={"contained"}
                                color={"secondary"}
                                onClick={onSendMessageClick}
                        >
                            Send
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;