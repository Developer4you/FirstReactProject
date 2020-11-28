let store = {
    _state: {
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
    },

    getState() { return this._state;},

    _callSubscriber() {
        console.log('State changed');},

   /* addPost() {
        let newPost = {
            id:5,
            message:this._state.profilePage.newPostText,
            likesCount:0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },*/

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id:5,
                message:this._state.profilePage.newPostText,
                likesCount:0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;

