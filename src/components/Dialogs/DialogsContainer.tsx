import React from 'react';
import {DialogsReducerStateType, sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


type MapStateToPropsType = {
    dialogsPage: DialogsReducerStateType
}

type MapDispatchToPropsType = {
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void,
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: AppStateType) : MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

//обернул в hoc WithAuthRedirect компоненту Dialogs с hoc connect для того,
// чтобы использовать Navigate, перенаправление на страницу логин,
// если isAuth false, т.е польз-ль не залогинен


export const DialogsContainer = WithAuthRedirect(connect(mapStateToProps, {sendMessage, updateNewMessageBody})(Dialogs));

