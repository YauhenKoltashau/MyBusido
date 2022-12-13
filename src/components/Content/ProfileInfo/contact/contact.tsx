import classes from "./Contact.module.scss";
import React from "react";

export const Contact = ( props: {title: string, value: object}) => {
    return (
        <div className={classes.contact}>
            <b>{props.title}</b>:{props.value?props.value:'0'}
        </div>
    )
}