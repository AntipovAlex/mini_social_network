import React from 'react';
import style from './ProfileInfo.module.css';
import Preloder from "../../../common/Preloder/Preloder";
import ProfileStatusWithHook from "../../ProfileStatusWithHook";
import userPhoto from './../../../../assest/img/images.jpeg';

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloder/>
    }

    const onMainPhotoSelector = (e) => {
        if(e.target.files.length){
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={style.content}>
            <div>
                <img
                    src="https://images.pexels.com/photos/315998/pexels-photo-315998.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            </div>
            <div>
                <ProfileStatusWithHook status ={props.status} updateStatus = {props.updateStatus}/>
            </div>
            <div className={style.descriptionBlock}>
                <img className={style.avatar} src={props.profile.photos.large || userPhoto}/>
                <div>
                    {props.isOwner && <input type="file" onChange={onMainPhotoSelector}/> }
                </div>
                <h2>{props.profile.fullName}</h2>
                <div> {props.profile.aboutMe}</div>
                <div>"{props.profile.lookingForAJobDescription}"</div>
            </div>
        </div>

    );
}


export default ProfileInfo;