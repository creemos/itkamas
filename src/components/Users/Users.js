import axios from 'axios'
import React from 'react'
import UsersItem from './UsersItem'


let Users = (props) => {
    if (props.users.length === 0) {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                debugger
                props.setUsers(response.data.items)
            })
        
    }
    let userList = props.users.map( u => {
        return <UsersItem id={u.id} key={u.id} name={u.name} followed={u.followed.toString()} toggleFollow={props.toggleFollow} />
    })
    return (
        <div>
            {userList}
        </div>
    )
}

export default Users