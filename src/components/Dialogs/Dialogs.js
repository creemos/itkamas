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
        
    return (
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                </div>
                <div className={classes.messages}>
                    <Messages text={messagesData[0].text}/>
                    <Messages text={messagesData[1].text}/>
                    <Messages text={messagesData[2].text}/>
                </div>
            </div>
    )
}

export default Dialogs