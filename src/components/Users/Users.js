import React from 'react'
import UsersItem from './UsersItem'


let Users = (props) => {
    let userList = props.users.users.map( u => {
        return <UsersItem id={u.id} fullname={u.fullname} followed={u.followed.toString()} toggleFollow={props.toggleFollow} />
    })
    return (
        <div>
            {userList}
        </div>
    )
}

export default Users