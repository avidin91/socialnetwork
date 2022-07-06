import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(currentValue => {return <DialogItem name={currentValue.name} key={currentValue.id} id={currentValue.id}/>});

    let messagesElements = props.messagesData.map(message => {return <Message message={message.message} key={message.id} />});

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
                <textarea onChange={onMessageChange} value={newMessageText} placeholder='Text here...' ></textarea>
                <button onClick={onSendMessageClick}> Push message</button>
            </div>
        </div>
    );
}

export default Dialogs;