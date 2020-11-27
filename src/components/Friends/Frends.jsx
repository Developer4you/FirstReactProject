import React from 'react';
import s from './Friends.module.css';
import DialogItem from "./DilogsItem/DialogItem";
import Message from "./Message/Message";

const Frends = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    )
}


export default Frends;