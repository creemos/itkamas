import axios from 'axios'
import React from 'react'
import UsersItem from './UsersItem'

class Users extends React.Component {

    userList = this.props.users.map( u => {
        return <UsersItem id={u.id} key={u.id} name={u.name} followed={u.followed.toString()} toggleFollow={this.props.toggleFollow} />
    })

    getUsers = () => {
        if (this.props.users.length === 0) {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.getUsers}>GET LIST</button>
                {this.userList}
            </div>
        )
    }
}

export default Users