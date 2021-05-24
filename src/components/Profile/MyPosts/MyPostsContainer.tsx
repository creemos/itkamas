import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { AppStateType } from '../../../redux/reduxStore'
import {addPostActionCreator, AddPostActionCreatorType} from '../../../redux/store'
import MyPosts from './MyPosts'


const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AddPostActionCreatorType>) => {
    return {
        addPost: (text: string) => {
            dispatch(addPostActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer