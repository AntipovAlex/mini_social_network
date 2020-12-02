import React, {Component} from 'react';
import style from './ProfileInfo.module.css';
import Preloder from "../../../common/Preloder/Preloder";
import ProfileStatus from "../../ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloder/>
    }
    return (
        <div className={style.content}>
            <div>
                <img
                    src="https://images.pexels.com/photos/315998/pexels-photo-315998.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            </div>
            <div>
                <ProfileStatus status = "Hello big world!!!"/>
            </div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <h2>{props.profile.fullName}</h2>
                <div> {props.profile.aboutMe}</div>
                <div>"{props.profile.lookingForAJobDescription}"</div>
            </div>
        </div>

    );
}


export default ProfileInfo;