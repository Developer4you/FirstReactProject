import {rerenderEntireTree} from "../render";

let state = {
        profilePage: {
            posts: [
            {id: 1, message: 'Hello', likesCount: 3},
            {id: 2, message: 'And You too!', likesCount: 12},
            {id: 3, message: 'You are cool!', likesCount: 12},
            {id: 4, message: 'WWWOOOOOOOOUUUU', likesCount: 12}],
            newPostText:'Привет, меня зовут '
                    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'It is realy cool!!!'},
            {id: 3, message: 'I am very happy to learn React with you!'}
        ],
        dialogs: [
            {id: 1, name: 'Shrek'},
            {id: 2, name: 'Feona'},
            {id: 3, name: 'Donkey'}
        ],
        }
}

export let addPost = () => {
    let newPost = {
        id:5,
        message:state.profilePage.newPostText,
        likesCount:0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;

    rerenderEntireTree(state);
}

export default state;