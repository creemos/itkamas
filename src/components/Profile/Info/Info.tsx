import React, { useState } from "react";
import Preloader from "../../Common/Preloader";
import classes from "./Info.module.css";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";
import EditProfileForm from "./EditProfileForm";

type InfoType = {
  profile: {
    userId: number;
    aboutMe: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    photos: { small: string; large: string };
    contacts: {
      github: string;
      vk: string;
      facebook: string;
      instagram: string;
      twitter: string;
      website: string;
      youtube: string;
      mainLink: string;
    };
  };
  status: string;
  updateStatus: () => void;
  isOwner: boolean;
  updateUsersProfile: (data: any) => void;
  savePhoto: (data: any) => void;
};

type HTMLInputEvent = {
  target: HTMLInputElement & EventTarget;
};

const Info: React.FC<InfoType> = (props) => {
  const mainPhotoWasSelected = (e: HTMLInputEvent) => {
    if (e.target.files) {
      props.savePhoto(e.target.files[0]);
    }
  };

  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={classes.content}>
      <div className={classes.desc}>
        <img src={props.profile.photos.large} alt="" />
        {props.isOwner && (
          <div>
            <input type="file" onChange={mainPhotoWasSelected} />
          </div>
        )}
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
        <hr />
        {props.isOwner ? (
          <ShowInfoAndEdit
            profile={props.profile}
            updateUsersProfile={props.updateUsersProfile}
          />
        ) : (
          <ShowInfo profile={props.profile} />
        )}
      </div>
    </div>
  );
};

export default Info;

type ShowInfoPropsType = {
  profile: {
    userId: number;
    aboutMe: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    photos: { small: string; large: string };
    contacts: {
      github: string;
      vk: string;
      facebook: string;
      instagram: string;
      twitter: string;
      website: string;
      youtube: string;
      mainLink: string;
    };
  }
}

const ShowInfo: React.FC<ShowInfoPropsType> = (props) => {
  return (
    <div>
      <div>
        <b>Full Name: </b> {props.profile.fullName}
      </div>
      <div>
        <b>About Me: </b> {props.profile.aboutMe}
      </div>
      <div>
        <b>Looking for a job: </b> {props.profile.lookingForAJob ? "Yes" : "No"}
      </div>
      {props.profile.lookingForAJob ? (
        <div>
          <b>lookingForAJobDescription: </b> {props.profile.lookingForAJob}
        </div>
      ) : null}
      <div>
        <b>Contacts: </b>{" "}
        {Object.entries(props.profile.contacts).map(([contact, link]) => {
          return (
            link && (
              <div className={classes.contacts_item} key={contact}>
                <b>{contact}: </b>
                {link}
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

type ShowInfoAndEditPropsType = {
  profile: {
    userId: number;
    aboutMe: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    photos: { small: string; large: string };
    contacts: {
      github: string;
      vk: string;
      facebook: string;
      instagram: string;
      twitter: string;
      website: string;
      youtube: string;
      mainLink: string;
    };
  }
  updateUsersProfile: (data: any) => void;
}

const ShowInfoAndEdit: React.FC<ShowInfoAndEditPropsType> = (props) => {
  let userId = props.profile.userId;

  const [editMode, setEditMode] = useState(false);

  const submitProfileForm = (data: any) => {
    let profileInfo = {
      userId: userId,
      aboutMe: data.aboutMe || props.profile.aboutMe,
      lookingForAJob: data.lookingForAJob || false,
      lookingForAJobDescription:
        data.lookingForAJobDescription ||
        props.profile.lookingForAJobDescription,
      fullName: data.fullName || props.profile.fullName,
      contacts: {
        github: data.github || props.profile.contacts.github,
        vk: data.vk || props.profile.contacts.vk,
        facebook: data.facebook || props.profile.contacts.facebook,
        instagram: data.instagram || props.profile.contacts.instagram,
        twitter: data.twitter || props.profile.contacts.twitter,
        website: data.website || props.profile.contacts.website,
        youtube: data.youtube || props.profile.contacts.youtube,
        mainLink: data.mainLink || props.profile.contacts.mainLink,
      },
    };
    props.updateUsersProfile(profileInfo);
    setEditMode(false);
  };

  return (
    <div>
      {editMode && (
        <EditProfileForm
          onSubmit={submitProfileForm}
          profile={props.profile}
          editMode={editMode}
          setEditMode={setEditMode}
        />
      )}
      {!editMode && (
        <div>
          <div>
            <b>Full Name: </b> {props.profile.fullName}
          </div>
          <div>
            <b>Looking for a job: </b>{" "}
            {props.profile.lookingForAJob ? "Yes" : "No"}
          </div>
          {props.profile.lookingForAJob ? (
            <div>
              <b>lookingForAJobDescription: </b>{" "}
              {props.profile.lookingForAJobDescription}
            </div>
          ) : null}
          <div>
            <b>Contacts: </b>{" "}
            {Object.entries(props.profile.contacts).map(([contact, link]) => {
              return (
                link && (
                  <div className={classes.contacts_item} key={contact}>
                    <b>{contact}: </b>
                    {link}
                  </div>
                )
              );
            })}
          </div>
          <button
            onClick={() => {
              setEditMode(true);
            }}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};
