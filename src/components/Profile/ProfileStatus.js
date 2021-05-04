import React from 'react';
import { Component } from 'react';
 
class ProfileStatus extends Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    enaEditMode = () => {
        this.setState({editMode: true})
    }

    disEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState(
            {status: e.currentTarget.value}
        )
    }

    render() {
        return (
        <div>
            {!this.state.editMode && 
            <div onClick={this.enaEditMode}>
                <span>{this.props.status}</span>
            </div> 
            }
            {this.state.editMode &&
            <div>
                <input autoFocus={true} 
                    onBlur = {this.disEditMode} 
                    value={this.state.status}
                    onChange={this.onStatusChange}/>
            </div> }
        </div>
        )
    }
    
}

export default ProfileStatus