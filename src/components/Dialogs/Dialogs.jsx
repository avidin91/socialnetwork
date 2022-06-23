import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dimych',},
        {id: 2, name: 'Andrey',},
        {id: 3, name: 'Sveta',},
        {id: 4, name: 'Sasha',},
        {id: 5, name: 'Victor',},
        {id: 6, name: 'Valera',},
    ];
    
    let dialogsElements = dialogsData.map(currentValue => {return <DialogItem name={currentValue.name} id={currentValue.id}/>});

    let messagesData = [
        {id: 1, message: 'Hi',},
        {id: 2, message: 'How is your bench-press?',},
        {id: 3, message: 'You',},
        {id: 4, message: 'Yo',},
        {id: 5, message: 'Yo',},
    ];

    let messagesElements = messagesData.map(message => {return <Message message={message.message}/>});

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;