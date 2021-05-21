import React from 'react'
import {connect} from 'react-redux' 
import Profile from './Profile'
import { withRouter, RouteComponentProps } from 'react-router'
import { getUserProfile, getStatus, updateStatus, savePhoto, updateUsersProfile } from '../../redux/profileReducer';
import { withAuthRedirect } from '../hoc/authRedirect';
import { compose } from 'redux';

interface ProfileContainerInterface {
    id: number
    updateUsersProfile: () => void
    savePhoto: () => void
    profile: any
    status: string
    updateStatus: () => void
    getUserProfile: (id: number) => void
    getStatus: (id: number) => void
}

interface HomeProps extends RouteComponentProps<any> {
}

class ProfileContainer extends React.Component<ProfileContainerInterface & HomeProps> {

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
            <Profile  {...this.props} updateUsersProfile={this.props.updateUsersProfile} savePhoto={this.props.savePhoto} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} isOwner = {!this.props.match.params.userId}/>
        )
    }
}

type ProfileContainerMSTPType = {
    profilePage: {
        profile: any
        status: string
    }
    auth: {
        login: string
        userId: number
        isAuth: boolean
    }
}

let mapStateToProps = (state: ProfileContainerMSTPType) => {
    return {
        profile: state.profilePage.profile,
        login: state.auth.login,
        id: state.auth.userId,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.FC>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, updateUsersProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
