import React from 'react'
import { connect } from 'react-redux' 
import Header from './Header'
import { setAuthUserData, getAuth } from '../../redux/authReducer'

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuth()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

})

export default connect(mapStateToProps, {setAuthUserData, getAuth})(HeaderContainer)