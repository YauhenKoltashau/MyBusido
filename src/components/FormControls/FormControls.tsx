import React from "react";
import styles from "./FormControl.module.css"

const FormControl = ({...props}) => {
   const hasError = props.meta.touched && props.meta.error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error: '')} >
            <div>
                {props.children}
            </div>
            <div>
                {hasError && <span className={styles.error}>{props.meta.error}</span>}
            </div>

        </div>
    )
}
export const Texarea = ({...props}) => {
    return (
       <FormControl{...props}><textarea {...props.input} {...props}/></FormControl>
    )
}
export const Input = ({...props}) => {
    return (
            <FormControl {...props}>
                <input {...props.input} {...props}/>
            </FormControl>

    )
}