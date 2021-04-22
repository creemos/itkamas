import { connect } from 'react-redux'
import { followToggleAC } from '../../redux/usersReducer'
import Users from './Users'

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch(followToggleAC(userId))
        }
    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UserContainer