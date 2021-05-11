import React, {useState} from 'react';
 
const ProfileStatusWithHooks = (props) =>  {

    let [editMode, setEditMode] = useState(false) 
    let [status, setStatus] = useState(props.status)

    const saveStatus = (e) => {
        setStatus(e.currentTarget.value)
        props.updateStatus(status)
        setEditMode(false)
    }

    return (
        <div>
            {!editMode && 
                <div onClick = {() => {editMode = setEditMode(true)}}>
                    <span>{props.status}</span>
                </div> 
            }
            {editMode &&
                <div>
                    <input autoFocus={true} 
                        onBlur = {saveStatus}
                        onChange={e => setStatus(e.currentTarget.value)}/>
                </div> 
            }
        </div>
        )
    
}

export default ProfileStatusWithHooks