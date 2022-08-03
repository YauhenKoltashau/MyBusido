import classes from './Dialogs.module.css';
import React from "react";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Texarea} from "../common/FormControls/FormControls";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";

export const Dialogs = (props: DialogsPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.addMessage(formData.newMessage)
        console.log(formData)
    }

    let dialogsElement = props.dialogs.map((d) =>
        <DialogItem key={d.id} name={d.name} id={d.id}/>
    )
    let messagesItem = props.messages.map((m) =>
        <Message key={m.id} id={m.id} message={m.message}/>)
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElement}
            </div>

            <div className={classes.messages}>
                {messagesItem}
                <MessageReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}
type FormDataType = {
    newMessage: string
}
const maxLength100 = maxLengthCreator(100)
const minLength1 = minLengthCreator(1)
const MessageForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter your message"} name={"newMessage"} component={Texarea} validate={[required, maxLength100, minLength1]}/>
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>

    )
}
const MessageReduxForm = reduxForm<FormDataType>({form: "addMessage"})(MessageForm)