import {statePropsType} from "../index";


let rerenderEntireTree = (props: statePropsType) => {

}

export let state = {
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
};

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer: any) => {
    rerenderEntireTree = observer;
}

