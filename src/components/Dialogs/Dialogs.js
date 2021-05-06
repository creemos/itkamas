import React from 'react'
import DialogItem from './DialogItem'
import Messages from './Messages'
import classes from './Dialogs.module.css'
import DialogForm from './DialogForm';

const Dialogs = (props) => {
    let {dialogsData, messagesData} = props

    let newDialogsData = dialogsData.map(item => {
        return <DialogItem name={item.name} id={item.id} key={item.id} />
    })

    let newMessagesData = messagesData.map(item => {
        return <Messages text={item.text} key={item.id}/>
    })

    let addMessage = (data) => {
        props.addMessage(data.dialogInput)
    }

    return (
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    {newDialogsData}
                </div>
                <div className={classes.messages}>
                    {newMessagesData}
                    <DialogForm  onSubmit={addMessage}/>
                </div>
            </div>
    )
}

export default Dialogs