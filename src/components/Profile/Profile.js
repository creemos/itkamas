import React from 'react'
import classes from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import Info from './Info/Info'
import store from './../../redux/reduxStore'

const Profile = () => {
    return (
      <div className={classes.content}>
        <Info />
        <MyPostsContainer store = {store}/>
      </div>
    )
}

export default Profile