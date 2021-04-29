import React from 'react'
import classes from './Users.module.css'
import {Link} from 'react-router-dom'
import { UserAPI }from '../../api/api'

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    if (pagesCount > 30) {
        pagesCount = 30
    }
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const toggleFollow = (user) => {
        
        if (user.followed) {
            props.toggleFollowingInProgress(true, user.id)
            UserAPI.unfollowUser(user.id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    props.toggleFollow(user.id)
                    props.toggleFollowingInProgress(false, user.id)
                }
            })
        } else {
            props.toggleFollowingInProgress(true, user.id)
            UserAPI.followUser(user.id)
            .then(response => {
                    if (response.data.resultCode === 0) {
                        props.toggleFollow(user.id)
                        props.toggleFollowingInProgress(false, user.id)
                    }
                })
        }
    }
    return ( 
        <div>
            <div> {pages.map(i => {
                            return <span key={`page-${i}`} className = {props.currentPage === i ? classes.selectedPage : null} onClick = {(e) => {props.onPageChanged(i)}} > | {i} | </span>
                        })} 
            <hr />
            </div> 
            {props.users.map(u => {
                debugger
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