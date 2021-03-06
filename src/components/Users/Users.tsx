import React from 'react'
import classes from './Users.module.css'
import {Link} from 'react-router-dom'

type UsersPropsType = {
totalUsersCount: number
pageSize: number
followOk: (id: number) => void
unfollowOk: (id: number) => void
currentPage: number
onPageChanged: (pageNumber: number) => void
users: Array<any>
followingInProgress: Array<number>
toggleFollowingInProgress: () => void
toggleFollow: (data: {id: number, followed: boolean, name: string, status: string}) => void
}

const Users: React.FC<UsersPropsType> = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    if (pagesCount > 30) {
        pagesCount = 30
    }
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const toggleFollow = (user: {followed: boolean, id: number}) => {
        if (user.followed) {
            props.followOk(user.id)
        } else {
            props.unfollowOk(user.id)
        }
    }

    return ( 
        <div>
            <div> {pages.map(i => {
                            return <span key={`page-${i}`} className = {props.currentPage === i ? classes.selectedPage: ''} onClick = {(e) => {props.onPageChanged(i)}} > | {i} | </span>
                        })} 
            <hr />
            </div> 
            {props.users.map(u => {
                return (
                    <div key={`user-${u.id}`} className = {classes.container}>
                        <div className = {classes.divInfo}>
                                <div className = {classes.imgfollow}>
                                    <Link to={'/profile/' + u.id}>
                                        <img src = {u.photos.small ? u.photos.small : 'https://avotar.ru/avatar/minony/avatarka.gif'} alt = '' />
                                    </Link>
                                
                                <button onClick = {() => toggleFollow(u)} disabled={props.followingInProgress.some(id => id === u.id)}> {u.followed? 'Unfollow' : 'Follow'} </button> 
                                </div> 
                                <div>
                                <p> id: {u.id} </p><p>Name: {u.name}</p > <p> Status: {u.status} </p> 
                                </div> 
                            </div> 
                        </div>)
            })
        } 
        </div>
    )
}

export default Users