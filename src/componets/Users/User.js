import React from 'react';
import styles from './Users.module.css';
import userPhoto from './../../assest/img/images.jpeg';
import {NavLink} from "react-router-dom";

const User = ({user, followInProgress, unfollow, follow}) => {
    return (
        <div>
                <span>
                    <div>
                        <NavLink to={"/profile/" + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.usersPhoto}/>
                    </NavLink>
                        </div>
                    <div>
                        {user.followed
                            ? <button disabled={followInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }}>Unfollow</button>
                            : <button disabled={followInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }}>Follow</button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div> {user.email}</div>
                        <div> {user.totalCount} </div>
                    </span>
                </span>
        </div>
    )
}


    export default User;