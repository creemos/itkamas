import React from 'react'
import { connect } from 'react-redux'
import {updatePostTextActionCreator, addPostActionCreator} from '../../../redux/store'
import MyPosts from './MyPosts'


const mapStateToProps = (state) => {
    debugger
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        onTextChange: (text) => {
            dispatch(updatePostTextActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer