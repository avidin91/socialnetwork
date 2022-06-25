import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {


    
    let dialogsElements = props.state.dialogsData.map(currentValue => {return <DialogItem name={currentValue.name} id={currentValue.id}/>});



    let messagesElements = props.state.messagesData.map(message => {return <Message message={message.message}/>});

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