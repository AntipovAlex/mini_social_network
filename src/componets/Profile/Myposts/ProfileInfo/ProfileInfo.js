import React, {Component} from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={style.content}>
            <div>
                <img
                    src="https://images.pexels.com/photos/315998/pexels-photo-315998.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            </div>
            <div className={style.descriptionBlock}>
                ava+description
            </div>
        </div>

    );
}


export default ProfileInfo;