import React from 'react'
import axios from 'axios'
import classes from './Users.module.css'
import {Link} from 'react-router-dom'

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
            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                withCredentials: true,
                headers: {
                    'API-KEY': '20abb38d-9d20-430d-b607-eb6ffb3049c4'
                }
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    props.toggleFollow(user.id)
                }
            })
        } else {
            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                withCredentials: true,
                headers: {
                    'API-KEY': '20abb38d-9d20-430d-b607-eb6ffb3049c4'
                }
            })
            .then(response => {
                    if (response.data.resultCode === 0) {
                        props.toggleFollow(user.id)
                    }
                })
        } 
    }
    return ( 
        <div>
            <div> {pages.map(i => {
                            return <span className = {props.currentPage === i ? classes.selectedPage : null} onClick = {(e) => {props.onPageChanged(i)}} > | {i} | </span>
                        })} 
            <hr />
            </div> 
            {props.users.map(u => {
                return (
                    <div className = {classes.container}>
                        <div className = {classes.divInfo}>
                                <div className = {classes.imgfollow}>
                                    <Link to={'/profile/' + u.id}>
                                        <img src = {u.photos.small ? u.photos.small : 'https://avotar.ru/avatar/minony/avatarka.gif'} alt = '' />
                                    </Link>
                                
                                <button onClick = {() => toggleFollow(u)} > {u.followed? 'Unfollow' : 'Follow'} </button> 
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