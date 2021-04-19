import React from 'react'
import DialogItem from './DialogItem'
import Messages from './Messages'
import classes from './Dialogs.module.css'

const Dialogs = (props) => {

    let {dialogsData, messagesData} = props.state.messagesPage

    let newDialogsData = dialogsData.map(item => {
        return <DialogItem name={item.name} id={item.id} />
    })

    let newMessagesData = messagesData.map(item => {
        return <Messages text={item.text} />
    })

    let newMessageText = React.createRef()

    let addMessage = () => {
        alert(newMessageText.current.value)
        
    }

    return (
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    {newDialogsData}
                </div>
                <div className={classes.messages}>
                    {newMessagesData}
                    <div className={classes.addMessageForm}>
                        <textarea ref={newMessageText}></textarea>
                        <button button onClick={ addMessage }>Add message</button>
                    </div>
                    
                </div>
            </div>
    )
}

export default Dialogs