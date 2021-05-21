import React from 'react'
import { Field, InjectedFormProps, reduxForm } from "redux-form"
import classes from './MyPosts.module.css'
import { maxLengthValidatorCreator, requiredField } from '../../../Utils/Validators/Validators';
import { Textarea } from '../../Common/FormControls/FormControls';

let maxLength100 = maxLengthValidatorCreator(100)

let AddPostForm: React.FC<InjectedFormProps> = (props) => {
    const {handleSubmit} = props

    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.addPostForm}>
            <Field  name='newPostText'
                    component={Textarea}
                    type='text'
                    validate = {[requiredField, maxLength100]}
                    placeholder='Write new post'/>
            <button>Add post</button>
            </div>
        </form>
    )
}

let AddPostFormExp = reduxForm({form: 'addPostForm'})(AddPostForm)

export default AddPostFormExp