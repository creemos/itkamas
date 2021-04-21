import React from 'react'
import {updatePostTextActionCreator, addPostActionCreator} from '../../../redux/store'
import MyPosts from './MyPosts'

const MyPostsContainer = (props) => {
    let addPost = () => {
      props.dispatch(addPostActionCreator())
    }

    let onTextChange = (text) => {
        props.dispatch(updatePostTextActionCreator(text))
    }

    return (
        <MyPosts onTextChange = {onTextChange} addPost = {addPost} posts = {props.state.posts} newPostText = {props.state.newPostText}/>
    )
}

export default MyPostsContainer