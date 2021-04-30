import React from 'react'
import {connect} from 'react-redux' 
import Profile from './Profile'
import { withRouter } from 'react-router'
import { getUserProfile } from './../../redux/profileReducer';

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId)
}

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let WithRouterProfileContainer = withRouter(ProfileContainer)


export default connect(mapStateToProps, {getUserProfile})(WithRouterProfileContainer)