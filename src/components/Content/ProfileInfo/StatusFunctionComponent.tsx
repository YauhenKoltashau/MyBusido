import React, {ChangeEvent, useEffect, useState} from "react";
type StatusProps = {
    title: string
    callback: (title: string) => void
}
export const StatusFunctionComponent = (props:StatusProps) => {
    const[editModeItem,setEditModeItem]=useState(false)
    const[status, setStatus] = useState(props.title)
    useEffect(()=>{
        setStatus(props.title)
    },[props.title])
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>)=>{
        setStatus(e.currentTarget.value)
    }
    const deactivateMode = () => {
        setEditModeItem(false)
        props.callback(status)
    }
    const activateMode = () => {
        setEditModeItem(true)
    }
    return(

            editModeItem
                ? <>
                    <textarea value={status}  autoFocus onChange={onChangeHandler} onBlur={deactivateMode}/>
                    <button onClick={deactivateMode}>SAVE</button>
                </>
                :<>
                    <span onDoubleClick={activateMode}>{props.title !==''?props.title:'no status'}</span>
                </>

        )

}