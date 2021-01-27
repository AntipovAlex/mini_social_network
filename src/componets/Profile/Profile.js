import React, {Component} from 'react';
import ProfileInfo from "./Myposts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Myposts/MyPostsContainer";

const Profile = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    return (
        <div>
            <ProfileInfo isOwner={isOwner}
                         savePhoto={savePhoto}
                         profile={profile}
                         status={status}
                         updateStatus={updateStatus}
                         saveProfile={saveProfile}/>
            <MyPostsContainer/>
        </div>

    );
}


export default Profile;