import React from 'react'
import classes from './Dialogs.module.css'
import {Link} from 'react-router-dom'

type DialogItemPropsType = {
    id: number
    name: string
}

const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div>
            <div className={classes.dialog}><Link to={path}>{props.name}</Link></div>
        </div>
    )
}

export default DialogItem