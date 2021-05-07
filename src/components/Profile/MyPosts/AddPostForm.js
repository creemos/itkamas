import React from 'react'
import { Field, reduxForm } from "redux-form"
import classes from './MyPosts.module.css'
import { maxLengthValidatorCreator, requiredField } from './../../../Utils/Validators/Validators';
import { Textarea } from './../../Common/FormControls/FormControls';

let maxLength10 = maxLengthValidatorCreator(10)

let AddPostForm = (props) => {
    const {handleSubmit} = props

    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.addPostForm}>
            <Field  name='newPostText'
                    component={Textarea}
                    type='text'
                    validate = {[requiredField, maxLength10]}
                    placeholder='Write new post'/>
            <button>Add post</button>
            </div>
        </form>
    )
}

AddPostForm = reduxForm({form: 'addPostForm'})(AddPostForm)

export default AddPostForm