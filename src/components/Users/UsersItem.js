import React from 'react'

const UsersItem = (props) => {
    const toggleFollow = (id) => {
        props.toggleFollow(id)
    }
    
    return (
        <div>
            <div>id: {props.id}, Full Name: {props.fullname}, followed: {props.followed}
            <button onClick={() => toggleFollow(props.id)}>Toggle</button>
             </div>

        </div>
    )
}

export default UsersItem