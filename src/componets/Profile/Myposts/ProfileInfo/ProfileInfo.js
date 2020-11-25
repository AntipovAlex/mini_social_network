import React, {Component} from 'react';
import style from './ProfileInfo.module.css';
import Preloder from "../../../common/Preloder/Preloder";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloder/>
    }
    debugger;
    return (
        <div className={style.content}>
            <div>
                <img
                    src="https://images.pexels.com/photos/315998/pexels-photo-315998.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            </div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava+description
            </div>
        </div>

    );
}


export default ProfileInfo;