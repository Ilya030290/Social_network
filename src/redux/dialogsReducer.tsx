import {DialogItemPropsType} from "../components/Dialogs/DialogItem/DialogItem";
import {MessagePropsType} from "../components/Dialogs/Message/Message";
import {ActionsTypes} from "./state";

type DialogsReducerState = {
        dialogs: Array<DialogItemPropsType>
        messages: Array<MessagePropsType>
        newMessageBody: string
}

export const dialogsReducer = (state: DialogsReducerState, action: ActionsTypes) => {

    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body;
            return state;
        case 'SEND-MESSAGE':
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}