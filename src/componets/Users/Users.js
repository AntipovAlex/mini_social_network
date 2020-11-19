import React from 'react';
import styles from './Users.module.css'

const Users = (props) => {
    if(props.users.length===0) {
        props.setUsers(
            [{
                id: 1,
                photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfeyZMEfKAd06REhopTj9gEL4ToZAjnYf2Q&usqp=CAU",
                followed: false,
                fullName: "Sasha",
                status: "i am a boss",
                location: {city: "Kiev", country: "Ukrain"}
            },
                {
                    id: 2,
                    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfeyZMEfKAd06REhopTj9gEL4ToZAjnYf2Q&usqp=CAU",
                    followed: true,
                    fullName: "Koly",
                    status: "i am a big boss",
                    location: {city: "Minsk", country: "Belarus"}
                },
                {
                    id: 3,
                    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfeyZMEfKAd06REhopTj9gEL4ToZAjnYf2Q&usqp=CAU",
                    followed: false,
                    fullName: "Andrey",
                    status: "i am a littel boss",
                    location: {city: "New York", country: "USA"}
                }]
        )
    }
    return (
        < div> {
            props.users.map( u =>
                <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed
                        ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
                </div>
            )
        }
        </div>)
}


export default Users;