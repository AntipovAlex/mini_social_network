import React from 'react';
import styles from './Users.module.css';
import userPhoto from './../../assest/img/images.jpeg';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let page = [];
    for (let i = 1; i <= pagesCount; i++) {
        page.push(i)
    }
    return (
        <div>
            <div>{page.map(p => {
                return <span key={p} className={props.currentPage === p ? styles.selectPage : null}
                             onClick={(e) => {
                                 props.onCurrentPage(p)
                             }}>{p}</span>
            })}
            </div>
            {props.users.map(u =>
                <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/"+ u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
                    </NavLink>
                        </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "a5cc0e28-98ea-4601-b5da-e18d58eb70c8"
                                    }
                                })
                                    .then(response => {
                                        if(response.data.resultCode === 0){
                                            props.unfollowe(u.id)
                                        }
                                    })

                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "a5cc0e28-98ea-4601-b5da-e18d58eb70c8"
                                    }
                                })
                                    .then(response => {
                                        if(response.data.resultCode === 0){
                                            props.followe(u.id)
                                        }
                                    })

                            }}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div> {u.email}</div>
                        <div> {u.totalCount} </div>
                    </span>
                </span>
                </div>
            )
            }
        </div>)
}


export default Users;