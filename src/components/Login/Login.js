import React from 'react'
import {getLogin} from './../../redux/authReducer'
import LoginForm from './LoginForm'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const Login = (props) => {

    const submit = ({email, password, rememberMe}) => {
        props.getLogin(email, password, rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>Login </h1>
            <LoginForm onSubmit={submit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {getLogin})(Login)