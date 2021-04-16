import React from 'react'
import classes from './Dialogs.module.css'

const Messages = (props) => {
    return(
        <div className={classes.message}>
            {props.text}
        </div>
    )
}

export default Messages