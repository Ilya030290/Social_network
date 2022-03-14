import {statePropsType} from "../index";

export type ActionType = {
    type: string,
    newText?: string
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const store = {
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
            dialogs: [
                {id: 1, name: 'Valera'},
                {id: 2, name: 'Sergey'},
                {id: 3, name: 'Anton'},
                {id: 4, name: 'Veronika'},
                {id: 5, name: 'Aleksandr'},
                {id: 6, name: 'Artem'}
            ]
        }
    },
    _callSubscriber(props: statePropsType) {
        console.log('State changed');
    },
    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },
    dispatch(action: ActionType) {
        if (action.type === ADD_POST) {
            let newPost = {id: 5, message: this._state.profilePage.newPostText, likeCount: 0};
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            // @ts-ignore
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text:string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})












