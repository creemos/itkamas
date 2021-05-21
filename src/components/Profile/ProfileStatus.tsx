import React from 'react';
import { Component } from 'react';
 
interface ProfileStatusInterface {
    status: string
    updateStatus: (value: string) => void
}

class ProfileStatus extends Component<ProfileStatusInterface> {

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

    onStatusChange = (e: {currentTarget: HTMLInputElement}) => {
        this.setState(
            {status: e.currentTarget.value}
        )
    }

    componentDidUpdate(prevProps: ProfileStatusInterface, prevState: ProfileStatusInterface){
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.state.status})
        }
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