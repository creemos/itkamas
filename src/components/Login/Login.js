import React from 'react'
import {getLogin} from './../../redux/authReducer'
import LoginForm from './LoginForm'
import { connect } from 'react-redux';

const Login = (props) => {

    const submit = values => {
        let dataLogin = {
            email: values.email,
            password: values.password,
            rememberMe: values.rememberMe
        }
        props.getLogin(dataLogin)
    }

    return (
        <div>
            <h1>Login </h1>
            <LoginForm onSubmit={submit} />
        </div>
    )
}

let mapStateToProps = () => {
    return {

    }
}

export default connect(mapStateToProps, {getLogin})(Login)