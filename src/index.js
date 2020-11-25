import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hello', likesCount:3},
    {id: 2, message: 'And You too!', likesCount:12},
    {id: 3, message: 'You are cool!', likesCount:12},
    {id: 4, message: 'WWWOOOOOOOOUUUU', likesCount:12}
    ]

let dialogs = [
    {id: 1, name: 'Shrek'},
    {id: 2, name: 'Feona'},
    {id: 3, name: 'Donkey'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'It is realy cool!!!'},
    {id: 3, message: 'I am very happy to learn React with you!'}
]

ReactDOM.render(

    <App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
