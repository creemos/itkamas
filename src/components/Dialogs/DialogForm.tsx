import React from 'react'
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import classes from './Dialogs.module.css'
import { Textarea } from '../Common/FormControls/FormControls';
import { maxLengthValidatorCreator, requiredField } from '../../Utils/Validators/Validators';

let maxLength100 = maxLengthValidatorCreator(100)

type Props  = { 
    handleSubmit: any
}


let DialogForm: React.FC<InjectedFormProps & Props> = (props) => {

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

let DialogFormExp = reduxForm<{}, Props>({form: 'dialogForm'})(DialogForm)

export default DialogFormExp