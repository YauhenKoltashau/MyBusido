import React, {ChangeEvent, useState} from "react";
type editModeItemType = boolean
type EditableItemType = {
    title: string
    callback: (title: string) => void
}
export const EditableItem = React.memo((props: EditableItemType) => {
    console.log('Editable')
    let[title, setTitle] = useState(props.title)
    let[editModeItem, setEditModeItem] = useState<editModeItemType>(false)
    const editModeActivate = () => {
        setEditModeItem(true)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setTitle(e.currentTarget.value)
    }
    const modeViewActivate = () => {
      setEditModeItem(false)
        props.callback(title)
    }

    return (
        editModeItem
            ? <>
                <textarea value={title}  autoFocus onChange={onChangeHandler} onBlur={modeViewActivate}/>
                <button onClick={modeViewActivate}>SAVE</button>
            </>
            :<>
                <span onDoubleClick={editModeActivate} >{props.title}</span>
            </>

    )
})