import React from 'react'
import { reduxForm, Field } from 'redux-form';
import classes from './Dialogs.module.css'

let DialogForm = (props) => {

    const {handleSubmit} = props

    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.addMessageForm}>
                        <Field  name='dialogInput' 
                                component='input'
                                placeholder='Write message...'
                                />
                        <button>Add message</button>
            </div>
        </form>
        
    )
}

DialogForm = reduxForm({form: 'dialogForm'})(DialogForm)

export default DialogForm