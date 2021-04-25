import classes from './Users.module.css'
import axios from 'axios'
import React from 'react'

class Users extends React.Component {
componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => { 
                debugger
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })}
onPageChanged = (i) => {
    this.props.setCurrentPage(i)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${i}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items)

        })
}

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
                    {pages.map( i => {
                        if (i > 40) {
                            return
                        } else {
                            return <span className={this.props.currentPage === i && classes.selectedPage} 
                                     onClick={(e) => { this.onPageChanged(i)}}>|{i}|</span>
                                     }
                        }
                        )}
                        <hr />
                </div>
                {this.props.users.map( u => {
                     return <div className={classes.container}>
                                <div className={classes.divInfo}>
                                    <div className={classes.imgfollow}>
                                        <img src = {u.photos.small ? u.photos.small : 'https://avotar.ru/avatar/minony/avatarka.gif'} />
                                        <button onClick={() => toggleFollow(u.id)}>{buttonName}</button>
                                    </div>
                                <div>
                                    <p>id: {u.id}</p><p>Name: {u.name}</p><p>Status: {u.status}</p>
                                </div>
                            </div>
                     </div>
                })}
                <p>smotri 36 stranicu</p>
            </div>
        )
    }
}

export default Users