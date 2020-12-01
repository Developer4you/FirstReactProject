/*
import
    profileReduser
    from
    "./profile-reducer";
import
    dialogsReduser
    from
    "./dialogs-reducer";
import
    sidebarReduser
    from
    "./sidebar-reducer";


    let store = {
        _state: {
            profilePage: {
                posts: [
                    {id: 1, message: 'Hello', likesCount: 3},
                    {id: 2, message: 'And You too!', likesCount: 12},
                    {id: 3, message: 'You are cool!', likesCount: 12},
                    {id: 4, message: 'WWWOOOOOOOOUUUU', likesCount: 12}],
                newPostText: 'Привет, меня зовут '
            },
            dialogsPage: {
                dialogs: [
                    {id: 1, name: 'Shrek'},
                    {id: 2, name: 'Feona'},
                    {id: 3, name: 'Donkey'}
                ],
                messages: [
                    {id: 1, message: 'Hi'},
                    {id: 2, message: 'It is realy cool!!!'},
                    {id: 3, message: 'I am very happy to learn React with you!'}
                ],
                newMessageBody: ""
            },
            sidebar: {}
        },

        _callSubscriber() {
            console.log('State changed');
        },

        getState() {
            return this._state;
        },

        subscribe(observer) {
            this._callSubscriber = observer;
        },

        dispatch(action) {

            this._state.profilePage = profileReduser(this._state.profilePage, action);
            this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
            this._state.sidebar = sidebarReduser(this._state.sidebar, action);

            this._callSubscriber(this._state);

        }
    }


export default
    store;

*/
