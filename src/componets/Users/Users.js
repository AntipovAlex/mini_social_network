import React from 'react';
import styles from './Users.module.css';
import userPhoto from './../../assest/img/images.jpeg';

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
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollowe(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.followe(u.id)
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