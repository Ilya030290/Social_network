import './index.css';
import {store} from "./redux/state";
import {PostPropsType} from "./components/Profile/MyPosts/Post/Post";
import {MessagePropsType} from "./components/Dialogs/Message/Message";
import {DialogItemPropsType} from "./components/Dialogs/DialogItem/DialogItem";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

export type statePropsType = {
    profilePage: {
        posts: Array<PostPropsType>,
        newPostText: string
    },
    dialogsPage: {
        messages: Array<MessagePropsType>,
        dialogs: Array<DialogItemPropsType>
    }
};


let rerenderEntireTree = (state: statePropsType) => {
    ReactDOM.render(
        <App state={state}
             addPost={store.addPost.bind(store)}
             updateNewPostText={store.updateNewPostText.bind(store)}
        />,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);



/*reportWebVitals();*/
