import React from 'react'
import classes from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import Info from './Info/Info'

type ProfilePropsType = {
  isOwner: boolean
  profile: any
  status: string
  updateStatus: () => void
  savePhoto: () => void
  updateUsersProfile: () => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
      <div className={classes.content}>
        <Info isOwner = {props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} savePhoto={props.savePhoto} updateUsersProfile={props.updateUsersProfile}/>
        <MyPostsContainer />
      </div>
    )
}

export default Profile