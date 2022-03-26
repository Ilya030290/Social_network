import s from "./../Dialogs.module.css";
import React from "react";

export type MessageType = {
    message: string,
    id: number
}
const Message = (props: MessageType) => {
    return <div className={s.message}>{props.message}</div>
};

export default Message;