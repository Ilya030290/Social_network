import ReactDOM from "react-dom";
import App from "./App";
import {addPost, updateNewPostText} from "./redux/state";
import React from "react";
import {PostPropsType} from "./components/Profile/MyPosts/Post/Post";
import {MessagePropsType} from "./components/Dialogs/Message/Message";
import {DialogItemPropsType} from "./components/Dialogs/DialogItem/DialogItem";

type statePropsType = {
    profilePage: {
        posts: Array<PostPropsType>,
        newPostText: string
    },
    dialogsPage: {
        messages: Array<MessagePropsType>,
        dialogs: Array<DialogItemPropsType>
    }
};


export const rerenderEntireTree = (state: statePropsType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
}