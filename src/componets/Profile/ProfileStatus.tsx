import React, {ChangeEvent, Component} from 'react';

type propsType ={
    status: string
    updateStatus: (newStatus: string) => void
}
type stateType = {
    editMode: boolean
    status: string
}
class ProfileStatus extends Component <propsType, stateType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activeMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactiveMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps:propsType, prevState:stateType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <div><span onDoubleClick={this.activeMode}>{this.props.status || "----------"}</span></div>
                    : <div><input onChange={this.onChangeStatus} autoFocus={true} onBlur={this.deactiveMode}
                                  value={this.state.status}/></div>
                }
            </div>
        );
    }
}

export default ProfileStatus;