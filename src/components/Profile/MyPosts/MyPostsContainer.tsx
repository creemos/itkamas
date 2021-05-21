import { connect } from 'react-redux'
import {addPostActionCreator} from '../../../redux/store'
import MyPosts from './MyPosts'


const mapStateToProps = (state: {profilePage: any}) => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (text: string) => {
            dispatch(addPostActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer