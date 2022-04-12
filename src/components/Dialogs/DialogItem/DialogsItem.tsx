import {NavLink} from 'react-router-dom';
import classes from './../Dialogs.module.css';
import React from "react";
import {dialogsType} from "../../../index";


export const DialogItem: React.FC<dialogsType> = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.dialogActive}>{props.name}</NavLink>
        </div>
    )
}
