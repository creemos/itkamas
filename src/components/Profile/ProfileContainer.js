import React from 'react'
import {connect} from 'react-redux' 
import Profile from './Profile'
import { withRouter } from 'react-router'
import { getUserProfile, getStatus, updateStatus, savePhoto } from './../../redux/profileReducer';
import { withAuthRedirect } from './../hoc/authRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
       
        if (!userId) {
            userId = this.props.id
        } 

        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
}


    render() {
        return (
            <Profile  {...this.props} savePhoto={this.props.savePhoto} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} isOwner = {!this.props.match.params.userId}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        login: state.auth.login,
        id: state.auth.userId,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
