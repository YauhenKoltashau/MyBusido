import React, {ChangeEvent} from "react";
type StatusProps = {
    title: string
    callback: (title: string) => void
}
export class StatusClassComponent extends React.Component<StatusProps> {
    state = {
        editModeItem: false
    }
    activateMode () {
        this.setState(
            {editModeItem: true}
        )
    }
    deactivateMode () {
        this.setState(
            {editModeItem: false}
        )

    }
    onChangeHandler (e:ChangeEvent<HTMLTextAreaElement>){
        this.props.callback(e.currentTarget.value)
    }

    render() {
        return (
            this.state.editModeItem
                ? <>
                    <textarea value={this.props.title}  autoFocus onChange={this.onChangeHandler.bind(this)} onBlur={this.deactivateMode.bind(this)}/>
                    <button onClick={this.deactivateMode.bind(this)}>SAVE</button>
                </>
                :<>
                    <span onDoubleClick={this.activateMode.bind(this)} >{this.props.title}</span>
                </>

        )
    }
}