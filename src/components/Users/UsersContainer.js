import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Users from './Users'
import {
    toggleFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsLoading
} from '../../redux/usersReducer'
import Preloader from '../Common/Preloader'


class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.toggleIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.toggleIsLoading(false)
            })
    }
    
    onPageChanged = (i) => {
        this.props.toggleIsLoading(true)
        this.props.setCurrentPage(i)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${i}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
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
        isLoading: state.usersPage.isLoading
    }
}

const mapDispatchToProps =  {
        toggleFollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsLoading
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)

export default UserContainer