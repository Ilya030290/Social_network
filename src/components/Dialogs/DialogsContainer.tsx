import React from 'react';
import {DialogsReducerStateType, sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    dialogsPage: DialogsReducerStateType,
    isAuth: boolean
}

type MapDispatchToPropsType = {
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void,
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: AppStateType) : MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}


export const DialogsContainer = connect(mapStateToProps, {sendMessage, updateNewMessageBody})(Dialogs)

