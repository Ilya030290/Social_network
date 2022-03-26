import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {MessageType} from "../components/Dialogs/Message/Message";
import {DialogItemType} from "../components/Dialogs/DialogItem/DialogItem";
import {ActionsTypes, profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";

export type StateType = {
    profilePage: {
        posts: Array<PostType>
        newPostText: string
    },
    dialogsPage: {
        messages: Array<MessageType>
        newMessageBody: string
        dialogs: Array<DialogItemType>
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













