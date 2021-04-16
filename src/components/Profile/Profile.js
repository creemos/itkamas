import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import Info from './Info/Info'

const Profile = (props) => {
    return (
      <div className={classes.content}>
        <Info />
        <MyPosts posts={props.state.profilePage}/>
      </div>
    )
}

export default Profile