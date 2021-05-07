import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.css'
import logo from './../../avatarka-pustaya.jpg'

const Header = (props) => {

    return (
    <header className={classes.header}>
        <img src={logo} alt='noimage'/>
        <div className={classes.loginBlock}>
            {!props.isAuth ? <Link to='/login'>LOGIN</Link> : <div>{props.login} <button onClick={props.delLogin}>Logout</button></div>}
        </div>
    </header>
    )
}

export default Header