import React, {useState} from 'react'
import Preloader from '../../Common/Preloader'
import classes from './Info.module.css'
import ProfileStatusWithHooks from './../ProfileStatusWithHooks';
import EditProfileForm from './EditProfileForm';

const Info = (props) => {
  const mainPhotoWasSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  if (!props.profile) {
      return <Preloader />
    } 
  return (
      <div className={classes.content}>
          <div className={classes.desc}>
            <img src={props.profile.photos.large} alt='' />
            {props.isOwner && <div><input type='file' onChange={mainPhotoWasSelected}/></div>}
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            <hr/>
            {props.isOwner? <ShowInfoAndEdit profile = {props.profile} updateUsersProfile={props.updateUsersProfile} /> : <ShowInfo profile = {props.profile} />}
          </div>
      </div>
    )
  }

export default Info

const ShowInfo = (props) => {
  return <div>
          <div><b>Full Name: </b> {props.profile.fullName}</div>
          <div><b>About Me: </b> {props.profile.aboutMe}</div>
          <div><b>Looking for a job: </b> {props.profile.lookingForAJob? 'Yes' : 'No'}</div>
          {props.profile.lookingForAJob ? <div><b>lookingForAJobDescription: </b> {props.profile.lookingForAJob}</div> : null}
          <div><b>Contacts: </b> {Object.entries(props.profile.contacts).map(([contact, link]) => {
            return link && <div className={classes.contacts_item} key={contact}><b>{contact}: </b>{link}</div>
          })}</div>
        </div>
}

const ShowInfoAndEdit = (props) => {
  debugger
  let userId = props.profile.userId

  const [editMode, setEditMode] = useState(false)

  const submitProfileForm = (data) => {

    let profileInfo = {
      userId: userId,
      aboutMe: data.aboutMe || props.profile.aboutMe,
      lookingForAJob: data.lookingForAJob || false,
      lookingForAJobDescription: data.lookingForAJobDescription || props.profile.lookingForAJobDescription,
      fullName: data.fullName || props.profile.fullName,
      contacts: {
        github: data.github || props.profile.contacts.github,
        vk: data.vk || props.profile.contacts.vk,
        facebook: data.facebook || props.profile.contacts.facebook,
        instagram: data.instagram || props.profile.contacts.instagram,
        twitter: data.twitter || props.profile.contacts.twitter,
        website: data.website || props.profile.contacts.website,
        youtube: data.youtube || props.profile.contacts.youtube,
        mainLink: data.mainLink || props.profile.contacts.mainLink  
      }
    }
    props.updateUsersProfile(profileInfo)
    setEditMode(false)
  }

  return (
  <div>
      {editMode && <EditProfileForm onSubmit={submitProfileForm} profile = {props.profile} editMode={editMode} setEditMode={setEditMode}/>}
      {!editMode && <div>
        <div><b>Full Name: </b> {props.profile.fullName}</div>
        <div><b>Looking for a job: </b> {props.profile.lookingForAJob? 'Yes' : 'No'}</div>
        {props.profile.lookingForAJob ? <div><b>lookingForAJobDescription: </b> {props.profile.lookingForAJobDescription}</div> : null}
        <div><b>Contacts: </b> {Object.entries(props.profile.contacts).map(([contact, link]) => {
          return link && <div className={classes.contacts_item} key={contact}><b>{contact}: </b>{link}</div>
          })}</div>
        <button onClick={() => {setEditMode(true)} }>Edit</button>    
      </div> }
  </div>)
}

