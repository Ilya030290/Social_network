import {statePropsType} from "../index";


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
    getState() {
        return this._state
    },
    _callSubscriber(props: statePropsType) {
        console.log('State changed');
    },
    addPost() {
        let newPost = {id: 5, message: this._state.profilePage.newPostText, likeCount: 0};
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    }
}











