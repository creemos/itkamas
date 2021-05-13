import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { Input } from './../../Common/FormControls/FormControls'
import classes from './Info.module.css'



let EditProfileForm = (props) => {
    const {handleSubmit} = props
    return (
      <form onSubmit={handleSubmit}>
            <div><b>Full Name: </b> <Field name='fullName' component={Input} type='text' placeholder={props.profile.fullName}/></div>
            <div><b>About Me: </b> <Field name='aboutMe' component={Input} type='text' placeholder={props.profile.aboutMe}/></div>
            <div><b>Looking for a job: </b> <Field name='lookingForAJob' component={Input} type='checkbox'/></div>
            <div><b>lookingForAJobDescription: </b><Field name='lookingForAJobDescription' component={Input} type='input' placeholder={props.profile.lookingForAJobDescription}/></div>
            <div><b>Contacts: </b> {Object.entries(props.profile.contacts).map(([contact, link]) => {
              return <div className={classes.contacts_item} key={contact}><b>{contact}: </b> <Field name={contact} component={Input} placeholder={link}/></div>
              })}</div>
            <button type='submit'>Save</button><button onClick={() => {props.setEditMode(false)}}>Cancel</button>
        </form>
    )
}

EditProfileForm = reduxForm({form: 'editProfileForm'})(EditProfileForm)

export default EditProfileForm 