import classes from './Users.module.css'
import axios from 'axios'
import React from 'react'

class Users extends React.Component {
componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response =>
            
            { 
                debugger
                this.props.setUsers(response.data.items)}
            
            )}

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i<=pagesCount; i++){
            pages.push(i)
        }
        const toggleFollow = (id) => {
            this.props.toggleFollow(id)
        }
        let buttonName = this.props.followed === 'true' ? 'Unfollow' : 'Follow'
        return (
            <div>
                <div>
                    {pages.map( i => <span className={this.props.currentPage === i && classes.selectedPage}
                    onClick={(i) => this.props.setCurrentPage(i)}>{i}</span>)}
                </div>
                {this.props.users.map( u => {
                     return <div>
                                <div>id: {u.id}, Name: {u.name}
                                <button onClick={() => toggleFollow(u.id)}>{buttonName}</button>
                                </div>
                            </div>
                })}
            </div>
        )
    }
}

export default Users