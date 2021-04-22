import React from 'react'
import DialogItem from './DialogItem'
import Messages from './Messages'
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    let {dialogsData, messagesData, messageText} = props

    let newDialogsData = dialogsData.map(item => {
        return <DialogItem name={item.name} id={item.id} />
    })

    let newMessagesData = messagesData.map(item => {
        debugger
        return <Messages text={item.text} />
    })

    let newMessageText = React.createRef()

    let addMessage = () => {
        props.addMessage()
    }

    let onChangeMessage = (e) => {
        let text = e.target.value
        props.onChangeMessage(text)
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
                                    placeholder='Write message'
                                    value={messageText} 
                                    onChange={onChangeMessage}></textarea>
                        <button button onClick={ addMessage }>Add message</button>
                    </div>
                    
                </div>
            </div>
    )
}

export default Dialogs