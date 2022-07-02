import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();


    let onSendMessageClick = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (text) => {
        let action = updateNewMessageTextActionCreator(text)
        props.store.dispatch(action);
    };

    return (<Dialogs updateNewMessageText={onMessageChange}
                     onSendMessageClick={onSendMessageClick}
                     messagesData={state.messagesData}
                     newMessageText={state.newMessageText}
                     dialogsData={state.dialogsData}/>);
}

export default DialogsContainer;