import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {


    
    let dialogsElements = props.state.dialogsData.map(currentValue => {return <DialogItem name={currentValue.name} id={currentValue.id}/>});



    let messagesElements = props.state.messagesData.map(message => {return <Message message={message.message}/>});

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
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
                <textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogsPage.newMessageText}></textarea>
                <button onClick={addMessage}> Push message</button>
            </div>
        </div>
    );
}

export default Dialogs;