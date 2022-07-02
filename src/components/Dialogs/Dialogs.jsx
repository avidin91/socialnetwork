import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(currentValue => {return <DialogItem name={currentValue.name} id={currentValue.id}/>});

    let messagesElements = props.messagesData.map(message => {return <Message message={message.message}/>});

    let newMessageText = props.newMessageText;

    let onSendMessageClick = () => {
        props.onSendMessageClick()
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text)
    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea placeholder='Text here...' onChange={onMessageChange} value={newMessageText}></textarea>
                <button onClick={onSendMessageClick}> Push message</button>
            </div>
        </div>
    );
}

export default Dialogs;