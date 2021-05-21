import React from 'react'
import DialogItem from './DialogItem'
import Messages from './Messages'
import classes from './Dialogs.module.css'
import DialogForm from './DialogForm';

type DialogsType = {
    dialogsData: any
    messagesData: any
    addMessageDAC: (values: DialogInputType) => void
}

export type DialogInputType = {
    dialogInput: string
}


type DialogsItemType = {
    name: string
    id: number
    key: number
}

type MessagesItemsType = {
    id: number
    text: string
}

const Dialogs: React.FC<DialogsType> = (props) => {
    let {dialogsData, messagesData, addMessageDAC} = props

    let newDialogsData: Array<DialogsItemType> = dialogsData.map((item: {name: string, id: number, key: number}) => {
        return <DialogItem name={item.name} id={item.id} key={item.id} />
    })

    let newMessagesData: Array<MessagesItemsType> = messagesData.map((item: {id: number, text: string}) => {
        return <Messages text={item.text} key={item.id}/>
    })

    const addMessage = (values: any) => {
        addMessageDAC(values.dialogInput)
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