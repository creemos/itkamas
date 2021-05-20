import React from 'react'
import classes from './Dialogs.module.css'

type MessagesProps = {
    text: string
    key: number
}

const Messages: React.FC<MessagesProps> = (props) => {
    return(
        <div className={classes.message}>
            {props.text}
        </div>
    )
}

export default Messages