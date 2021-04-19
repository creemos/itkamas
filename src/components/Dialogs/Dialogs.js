import React from 'react'
import DialogItem from './DialogItem'
import Messages from './Messages'
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    let {dialogsData, messagesData, messageText} = props.messagesPage

    let newDialogsData = dialogsData.map(item => {
        return <DialogItem name={item.name} id={item.id} />
    })

    let newMessagesData = messagesData.map(item => {
        return <Messages text={item.text} />
    })

    let newMessageText = React.createRef()

    let addMessage = () => {
        props.addMessage()
    }

    let onChangeMessage = () => {
        let text = newMessageText.current.value
        props.updateMessageText(text)
    }

    return (
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    {newDialogsData}
                </div>
                <div className={classes.messages}>
                    {newMessagesData}
                    <div className={classes.addMessageForm}>
                        <textarea   ref={newMessageText} 
                                    value={messageText} 
                                    onChange={onChangeMessage}></textarea>
                        <button button onClick={ addMessage }>Add message</button>
                    </div>
                    
                </div>
            </div>
    )
}

export default Dialogs