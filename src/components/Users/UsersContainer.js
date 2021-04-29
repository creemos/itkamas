import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import {
    toggleFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsLoading,
    toggleFollowingInProgress
} from '../../redux/usersReducer'
import Preloader from '../Common/Preloader'
import { UserAPI } from './../../api/api';


class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.toggleIsLoading(true)
        UserAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
                this.props.toggleIsLoading(false)
            })
    }
    
    onPageChanged = (i) => {
        this.props.toggleIsLoading(true)
        this.props.setCurrentPage(i)
        UserAPI.getUsers(i, this.props.pageSize).then(data => {
                this.props.setUsers(data.items)
                this.props.toggleIsLoading(false)
            })
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
                    users = {this.props.users} /> }
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
        toggleFollowingInProgress
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)

export default UserContainer