import React, {useState} from 'react';
import style from './ProfileInfo.module.css';
import Preloder from "../../../common/Preloder/Preloder";
import ProfileStatusWithHook from "../../ProfileStatusWithHook";
import userPhoto from './../../../../assest/img/images.jpeg';
import ProfileDataForm from "../ProfileDataForm";

const ProfileInfo = ({profile, savePhoto, status, updateStatus, isOwner, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloder/>
    }


    const onMainPhotoSelector = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            });
    }

    return (
        <div className={style.content}>
            <div>
                <img
                    src="https://images.pexels.com/photos/315998/pexels-photo-315998.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            </div>
            <div>
                <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
            </div>
            <div className={style.descriptionBlock}>
                <img className={style.avatar} src={profile.photos.large || userPhoto}/>
                <div>
                    {isOwner && <input type="file" onChange={onMainPhotoSelector}/>}
                </div>
                {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData getToEditMode={() => setEditMode(true)} profile={profile} isOwner={isOwner}/>}

            </div>
        </div>
    );
}

const ProfileData = ({profile, isOwner, getToEditMode}) => {
    return <div>
        {isOwner && <button onClick={getToEditMode}> Edit </button>}
        <div>
            <b>Full name :</b> {profile.fullName}
        </div>
        <div>
            <b>Looking for a job :</b> {profile.lookingForAJob ? "Yes" : "No"}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills :</b> {profile.lookingForAJobDescription}
        </div>}
        <div>
            <b>About Me :</b> {profile.aboutMe}
        </div>
        <div className={style.contacts}>
            <b>Contacts :</b> {Object.keys(profile.contacts).map(key => {
            return <Contacts key={key} contactTitle={key} contactValues={profile.contacts[key]}/>
        })}
        </div>
    </div>
}


const Contacts = ({contactTitle, contactValues}) => {
    return <div><b> {contactTitle} :</b> {contactValues}</div>
}


export default ProfileInfo;