import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let linkToDialog = '/dialogs/' + `${props.id}`;
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={linkToDialog}>{props.name}</NavLink>
        </div>

    );
}

export default DialogItem;