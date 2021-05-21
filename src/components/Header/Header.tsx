import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.css'
import logo from './../../avatarka-pustaya.jpg'

type HeaderPropsType = {
    isAuth: boolean
    login: string
    delLogin: () => void
}

const Header = (props: HeaderPropsType) => {

    return (
    <header className={classes.header}>
        <img src={logo} alt='noimage'/>
        <div className={classes.loginBlock}>
            {!props.isAuth ? <Link to='/login'>LOGIN</Link> : <div>{props.login} <span className={classes.logoutSpan} onClick={props.delLogin}>Logout</span></div>}
        </div>
    </header>
    )
}

export default Header