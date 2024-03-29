import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
      messagesData: state.dialogsPage.messagesData,
      newMessageText: state.dialogsPage.newMessageText,
      dialogsData: state.dialogsPage.dialogsData,
  };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {dispatch(updateNewMessageTextActionCreator(text));},
        onSendMessageClick: () => {dispatch(addMessageActionCreator())},
    };
};

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;