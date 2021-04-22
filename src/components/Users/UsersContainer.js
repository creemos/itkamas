import { connect } from 'react-redux'
import { followToggleAC, setUsersAC } from '../../redux/usersReducer'
import Users from './Users'

const mapStateToProps = (state) => {
    return {
        users: state.usersPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch(followToggleAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UserContainer