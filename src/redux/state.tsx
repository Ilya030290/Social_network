import {PostPropsType} from "../components/Profile/MyPosts/Post/Post";
import {MessagePropsType} from "../components/Dialogs/Message/Message";
import {DialogItemPropsType} from "../components/Dialogs/DialogItem/DialogItem";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";

export type StateType = {
    profilePage: {
        posts: Array<PostPropsType>
        newPostText: string
    },
    dialogsPage: {
        messages: Array<MessagePropsType>
        newMessageBody: string
        dialogs: Array<DialogItemPropsType>
    },
    sidebar: {}
};

export type StoreType = {
    _state: StateType
    _callSubscriber: (state:StateType) => void
    getState: () => StateType
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionsTypes) => void
}


export type ActionsTypes =
    ReturnType<typeof addPostCreator>
    | ReturnType<typeof updateNewPostTextCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof sendMessageCreator>

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'My first post', likeCount: 13},
                {id: 2, message: 'I want to be a frontend developer', likeCount: 15}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber(state: StateType) {
        console.log('State changed');
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);
    }
}

export const addPostCreator = () => ({type: 'ADD-POST'}) as const

export const updateNewPostTextCreator = (text:string) =>
    ({type: 'UPDATE-NEW-POST-TEXT', newText: text}) as const

export const updateNewMessageBodyCreator = (body: string) =>
    ({type: 'UPDATE-NEW-MESSAGE-BODY', body: body}) as const

export const sendMessageCreator = () => ({type: 'SEND-MESSAGE'}) as const











