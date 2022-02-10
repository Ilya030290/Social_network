import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export const dialogs = [
    {id: 1, name: 'Valera'},
    {id: 2, name: 'Sergey'},
    {id: 3, name: 'Anton'},
    {id: 4, name: 'Veronika'},
    {id: 5, name: 'Aleksandr'},
    {id: 6, name: 'Artem'}
];
export const messages = [
    {id: 1, message: 'Hello!'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'What is your name?'},
    {id: 4, message: 'Come on'},
    {id: 5, message: 'Hey, where are you from?'},
    {id: 6, message: 'Okay'}
];
export const posts = [
    {id: 1, message: 'My first post', likeCount: 13},
    {id: 2, message: 'I want to be a frontend developer', likeCount: 15}
];

ReactDOM.render(
    <App dialogsData={dialogs} messagesData={messages} postsData={posts}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
