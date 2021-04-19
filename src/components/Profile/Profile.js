import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import Info from './Info/Info'

const Profile = (props) => {
    return (
      <div className={classes.content}>
        <Info />
        <MyPosts state={props.state} addPost = {props.addPost} updatePostText={props.updatePostText}/>
      </div>
    )
}

export default Profile