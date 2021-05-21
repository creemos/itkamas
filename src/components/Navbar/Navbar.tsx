import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'

const Nav: React.FC<any> = () => {
    return (
        <nav className={classes.nav}>
        <div className={classes.item}><Link to='/profile'>Profile</Link></div>
        <div className={classes.item}><Link to='/dialogs'>Messages</Link></div>
        <div className={classes.item}><Link to='/news'>News</Link></div>
        <div className={classes.item}><Link to='/music'>Music</Link></div>
        <div className={classes.item}><Link to='/settings'>Settings</Link></div>
        <br />
        <div className={classes.item}><Link to='/users'>Users</Link></div>
      </nav>
    )
}

export default Nav