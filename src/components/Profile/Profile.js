import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
      <div className={classes.content}>
        <img className={classes.profimg} src="https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM" />
          <div>
            ava+desc
          </div>
        <MyPosts />
      </div>
    )
}

export default Profile