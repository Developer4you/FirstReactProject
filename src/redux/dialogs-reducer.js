const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
};

const dialogsReduser = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id:6, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReduser;