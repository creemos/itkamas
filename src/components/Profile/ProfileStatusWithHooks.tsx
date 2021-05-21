import React, {useEffect, useState} from 'react';
 
type ProfileStatusWithHooksPropsType = {
    status: string
    updateStatus: (value: string) => void
}

const ProfileStatusWithHooks: React.FC<ProfileStatusWithHooksPropsType> = (props) =>  {

    let [editMode, setEditMode] = useState<boolean>(false) 
    let [status, setStatus] = useState<string>(props.status)

    const saveStatus = () => {
        props.updateStatus(status)
        setEditMode(false)
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    return (
        <div>
            {!editMode && 
                <div onClick = {() => setEditMode(true)}>
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