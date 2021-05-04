import { Redirect } from 'react-router';
import React from 'react'
import { connect } from 'react-redux';

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render(){
        if (this.props.isAuth === false) {
            return <Redirect to='/login' />
            }
        return <Component {...this.props} />
        }
    }

    const mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    }

    let withIsAuthStateComponent = connect(mapStateToProps)(RedirectComponent)

    return withIsAuthStateComponent
}
