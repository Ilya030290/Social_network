import {DialogItemPropsType} from "../components/Dialogs/DialogItem/DialogItem";
import {MessagePropsType} from "../components/Dialogs/Message/Message";
import {ActionsTypes} from "./profileReducer";


export type updateNewMessageBodyActionType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}

export type sendMessageActionType = {
    type: 'SEND-MESSAGE'
}


type DialogsReducerState = {
        dialogs: Array<DialogItemPropsType>
        messages: Array<MessagePropsType>
        newMessageBody: string
}

let initialState = {
    messages: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What is your name?'},
        {id: 4, message: 'Come on'},
        {id: 5, message: 'Hey, where are you from?'},
        {id: 6, message: 'Okay'}
    ],
    newMessageBody: '',
    dialogs: [
        {id: 1, name: 'Valera'},
        {id: 2, name: 'Sergey'},
        {id: 3, name: 'Anton'},
        {id: 4, name: 'Veronika'},
        {id: 5, name: 'Aleksandr'},
        {id: 6, name: 'Artem'}
    ]
}

export const dialogsReducer = (state: DialogsReducerState = initialState, action: ActionsTypes) => {

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

export const updateNewMessageBodyCreator = (body: string) :updateNewMessageBodyActionType =>
    ({type: 'UPDATE-NEW-MESSAGE-BODY', body: body})

export const sendMessageCreator = () :sendMessageActionType => ({type: 'SEND-MESSAGE'})