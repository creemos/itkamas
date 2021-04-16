import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div>
            <div className={classes.dialog}><Link to={path}>{props.name}</Link></div>
        </div>
    )
}

const Messages = (props) => {
    return(
        <div className={classes.message}>
            {props.text}
        </div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        { name: 'Misha', id: 1 }, 
        { name: 'Sasha', id: 2 }, 
        { name: 'Ann', id: 3 }, 
        { name: 'Olya', id: 4 }, 
        { name: 'Dima', id: 5 }, 
    ]

    let messagesData = [
        { id: 1, text: 'Hello!'},
        { id: 2, text: 'its test string'},
        { id: 3, text: 'nobody listen'}
    ]
        
    let newDialogsData = dialogsData.map(item => {
        return <DialogItem name={item.name} id={item.id} />
    })

    let newMessagesData = messagesData.map(item => {
        return <Messages text={item.text} />
    })

    return (
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    {newDialogsData}
                </div>
                <div className={classes.messages}>
                    {newMessagesData}
                </div>
            </div>
    )
}

export default Dialogs