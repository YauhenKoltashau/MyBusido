import React, {ChangeEvent} from "react";
type StatusProps = {
    title: string
    callback: (title: string) => void
}
export class StatusClassComponent extends React.Component<StatusProps> {
    state = {
        editModeItem: false,
        title:this.props.title
    }
    activateMode = () => {
        console.log('this:', this)
        this.setState(
            {editModeItem: true}
        )
    }
    deactivateMode () {
        this.setState(
            {editModeItem: false}
        )
        this.props.callback(this.state.title)

    }
    onChangeHandler (e:ChangeEvent<HTMLTextAreaElement>){
        this.setState({title: e.currentTarget.value})
    }
    componentDidUpdate(prevProps: Readonly<StatusProps>, prevState: Readonly<{}>) {
        if(prevProps.title !== this.props.title){
            this.setState({title: this.props.title})
        }
    }

    render() {
        return (
            this.state.editModeItem
                ? <>
                    <textarea value={this.state.title}  autoFocus onChange={this.onChangeHandler.bind(this)} onBlur={this.deactivateMode.bind(this)}/>
                    <button onClick={this.deactivateMode.bind(this)}>SAVE</button>
                </>
                :<>
                    <span onDoubleClick={this.activateMode} >{this.props.title}</span>
                </>

        )
    }
}