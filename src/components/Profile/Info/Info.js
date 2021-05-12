import React from 'react'
import Preloader from '../../Common/Preloader'
import classes from './Info.module.css'
import ProfileStatusWithHooks from './../ProfileStatusWithHooks';

const Info = (props) => {
  if (!props.profile) {
    return <Preloader />
  } 

  const mainPhotoWasSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  return (
      <div className={classes.content}>
          <div className={classes.desc}>
            <img src={props.profile.photos.large} alt='' />
            {props.isOwner && <div><input type='file' onChange={mainPhotoWasSelected}/></div>}
            <p> Name: {props.profile.fullName}</p>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            {props.profile.lookingForAJob && < p > ИЩУ РАБОТУ! {props.profile.lookingForAJobDescription} </p>}
          </div>
      </div>
    )
  }


export default Info