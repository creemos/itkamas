import React from 'react'
import Preloader from '../../Common/Preloader'
import classes from './Info.module.css'

const Info = (props) => {
  if (!props.profile) {
    return <Preloader />
  } 
  debugger
    return (
      <div className={classes.content}>
        <img className={classes.profimg} src="https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM" alt=''/>
          <div className={classes.desc}>
            <img src={props.profile.photos.large} />
          </div>
      </div>
    )
  }


export default Info