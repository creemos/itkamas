import React from 'react'
import { connect } from 'react-redux' 
import Header from './Header'
import { delLogin } from '../../redux/authReducer'

class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    id: state.auth.id,
    login: state.auth.login

})

export default connect(mapStateToProps, {delLogin})(HeaderContainer)