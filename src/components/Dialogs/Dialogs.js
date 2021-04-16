import React from 'react'
import DialogItem from './DialogItem'
import Messages from './Messages'
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
        
    

    let newDialogsData = props.state.messagesPage.dialogsData.map(item => {
        return <DialogItem name={item.name} id={item.id} />
    })

    let newMessagesData = props.state.messagesPage.messagesData.map(item => {
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