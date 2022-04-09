import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
import React from "react";
type DialogType = {
    name: string
    id: string
}
type MessageType = {
    message: string
}
const DialogItem:React.FC<DialogType> = (props ) => {
    let path = "/dialogs/"+ props.id
    return(
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.dialogActive}>{props.name}</NavLink>
        </div>
    )
}
const Message:React.FC<MessageType> = (props) => {
    return(
        <div className={classes.message}>{props.message}</div>
    )
}
export const Dialogs = () =>{
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem name={'Yauhen'} id={'1'}/>
                <DialogItem name={'Irina'} id={'2'}/>
                <DialogItem name={'Sergey'} id={'3'}/>
                <DialogItem name={'Pavel'} id={'4'}/>
                <DialogItem name={'Rolan'} id={'5'}/>
                <DialogItem name={'Roman'} id={'6'}/>
                <DialogItem name={'Igor'} id={'7'}/>
                <DialogItem name={'Rustam'} id={'8'}/>

            </div>
            <div className={classes.messages}>
                <Message message={"Hi!"}/>
                <Message message={"How is your progress?"}/>
                <Message message={"Anyone be able to become a programmer"}/>

            </div>
        </div>
    )
}