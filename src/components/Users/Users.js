import React from 'react'
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
    const toggleFollow = (id) => {
        props.toggleFollow(id)
    }
    let buttonName = props.followed === 'true' ? 'Unfollow' : 'Follow'
    return ( 
        <div>
            <div> {pages.map(i => {
                            return <span className = {props.currentPage === i && classes.selectedPage} onClick = {(e) => {props.onPageChanged(i)}} > | {i} | </span>
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
                                
                                <button onClick = {() => toggleFollow(u.id)} > {buttonName} </button> 
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