import React from 'react'
import Preloader from '../../Common/Preloader'
import classes from './Info.module.css'
import ProfileStatusWithHooks from './../ProfileStatusWithHooks';

const Info = (props) => {
  if (!props.profile) {
    return <Preloader />
  } 
    return (
      <div className={classes.content}>
          <div className={classes.desc}>
            <img src={props.profile.photos.large} alt='' />
            <p> Name: {props.profile.fullName}</p>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            {props.profile.lookingForAJob && < p > ИЩУ РАБОТУ! {props.profile.lookingForAJobDescription} </p>}
          </div>
      </div>
    )
  }


export default Info