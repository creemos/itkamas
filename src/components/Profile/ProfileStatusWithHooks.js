import React, {useEffect, useState} from 'react';
 
const ProfileStatusWithHooks = (props) =>  {

    let [editMode, setEditMode] = useState(false) 
    let [status, setStatus] = useState(props.status)

    const saveStatus = (status) => {
        props.updateStatus(status)
        setEditMode(false)
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    return (
        <div>
            {!editMode && 
                <div onClick = {() => {editMode = setEditMode(true)}}>
                    <span><b>Status: </b>{props.status}</span>
                </div> 
            }
            {editMode &&
                <div>
                    <input autoFocus={true} 
                        value = {status}
                        onBlur = {saveStatus}
                        onChange={e => setStatus(e.currentTarget.value)}/>
                </div> 
            }
        </div>
        )
    
}

export default ProfileStatusWithHooks