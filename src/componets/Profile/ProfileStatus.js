import React, {Component} from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
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
    }


    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <div><span onDoubleClick={this.activeMode}>{this.props.status}</span></div>
                    : <div><input autoFocus={true} onBlur={this.deactiveMode} value={this.props.status}/></div>
                }
            </div>
        );
    }
}

export default ProfileStatus;