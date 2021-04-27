import React from 'react'
import classes from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import Info from './Info/Info'
import store from './../../redux/reduxStore'

const Profile = (props) => {
    return (
      <div className={classes.content}>
        <Info profile={props.profile}/>
        <MyPostsContainer store = {store}/>
      </div>
    )
}

export default Profile