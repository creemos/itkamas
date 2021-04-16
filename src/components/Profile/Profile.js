import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import Info from './Info/Info'

const Profile = () => {
    return (
      <div className={classes.content}>
        <Info />
        <MyPosts />
      </div>
    )
}

export default Profile