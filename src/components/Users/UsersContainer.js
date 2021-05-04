import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import {
    toggleFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsLoading,
    toggleFollowingInProgress,
    getUsers,
    followOk,
    unfollowOk
} from '../../redux/usersReducer'
import Preloader from '../Common/Preloader'
import { withAuthRedirect } from '../hoc/authRedirect'
import { compose } from 'redux'


class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {

        return ( 
        <div>
            {this.props.isLoading ? <Preloader /> : 
            <Users  totalUsersCount = {this.props.totalUsersCount}
                    pageSize = {this.props.pageSize}
                    currentPage = {this.props.currentPage}
                    onPageChanged = {this.onPageChanged}
                    toggleFollow = {this.props.toggleFollow}
                    toggleFollowingInProgress = {this.props.toggleFollowingInProgress}
                    followingInProgress = {this.props.followingInProgress}
                    users = {this.props.users}
                    unfollowOk = {this.props.unfollowOk}
                    followOk = {this.props.followOk} /> }
        </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users, 
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress
    }
}

const mapDispatchToProps =  {
        toggleFollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsLoading,
        toggleFollowingInProgress,
        getUsers,
        followOk, 
        unfollowOk
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
    (UsersAPI)
