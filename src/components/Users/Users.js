import React from 'react'
import classes from './Users.module.css'

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
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
                        while ( i < 30 )  {
                            return <span className = {props.currentPage === i && classes.selectedPage} onClick = {(e) => {props.onPageChanged(i)}} > | {i} | </span>
                        }})} 
            <hr />
            </div> 
            {props.users.map(u => {
                return (
                    <div className = {classes.container}>
                        <div className = {classes.divInfo}>
                                <div className = {classes.imgfollow}>
                                <img src = {u.photos.small ? u.photos.small : 'https://avotar.ru/avatar/minony/avatarka.gif'} alt = '' />
                                <button onClick = {() => toggleFollow(u.id)} > {buttonName} </button> 
                                </div> 
                                <div>
                                <p> id: {u.id} </p><p>Name: {u.name}</p > <p> Status: {u.status} </p> 
                                </div> 
                            </div> 
                        </div>)
            })
        } <p> smotri 36 stranicu </p> 
        </div>
    )
}

export default Users