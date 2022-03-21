import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs";
import {StoreContext} from "../../StoreContext";

const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>
            {
            (store) => {

                let state = store.getState().dialogsPage;

                const onNewMessageChange = (body: string) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                }

                const onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }

                return <Dialogs
                    updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state}
                />
            }
        }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;