import React from 'react'
import classes from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import Info from './Info/Info'

const Profile = (props) => {
    return (
      <div className={classes.content}>
        <Info />
        <MyPostsContainer state={props.state} dispatch = {props.dispatch}/>
      </div>
    )
}

export default Profile