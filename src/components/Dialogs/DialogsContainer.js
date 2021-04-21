import React from 'react'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {

    let addMessage = () => {
        props.dispatch({
            type: 'ADD-MESSAGE'
        })
    }

    let onChangeMessage = (text) => {
        props.dispatch({
            type: 'UPDATE-MESSAGE-TEXT',
            newText: text
        })
    }

    return ( <
        Dialogs addMessage = {
            addMessage
        }
        onChangeMessage = {
            onChangeMessage
        }
        messagesPage = {
            props.messagesPage
        }
        />
    )
}

export default DialogsContainer