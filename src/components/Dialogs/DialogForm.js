import React from 'react'
import { reduxForm, Field } from 'redux-form';
import classes from './Dialogs.module.css'
import { Textarea } from './../Common/FormControls/FormControls';
import { maxLengthValidatorCreator, requiredField } from '../../Utils/Validators/Validators';

let maxLength100 = maxLengthValidatorCreator(100)

let DialogForm = (props) => {

    const {handleSubmit} = props

    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.addMessageForm}>
                        <Field  name='dialogInput' 
                                component={Textarea}
                                validate = {[requiredField, maxLength100]}
                                placeholder='Write message...'
                                />
                        <button>Add message</button>
            </div>
        </form>
        
    )
}

DialogForm = reduxForm({form: 'dialogForm'})(DialogForm)

export default DialogForm