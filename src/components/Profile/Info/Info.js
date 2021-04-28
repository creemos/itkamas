import React from 'react'
import Preloader from '../../Common/Preloader'
import classes from './Info.module.css'

const Info = (props) => {
  if (!props.profile) {
    return <Preloader />
  } 
    return (
      <div className={classes.content}>
        <img className={classes.profimg} src="https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM" alt='img'/>
          <div className={classes.desc}>
            <img src={props.profile.photos.large} alt='' />
            <p> Name: {props.profile.fullName}</p>
            <p>Status: {props.profile.aboutMe}</p>
            {props.profile.lookingForAJob && < p > ИЩУ РАБОТУ! {props.profile.lookingForAJobDescription} </p>}
          </div>
      </div>
    )
  }


export default Info