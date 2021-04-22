import React from 'react'

const UsersItem = (props) => {
    const toggleFollow = (id) => {
        props.toggleFollow(id)
    }
    let buttonName = props.followed === 'true' ? 'Unfollow' : 'Follow'
    return (
        <div>
            <div>id: {props.id}, Name: {props.name}
            <button onClick={() => toggleFollow(props.id)}>{buttonName}</button>
            </div>
        </div>
    )
}

export default UsersItem