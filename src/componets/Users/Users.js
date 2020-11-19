import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from './../../assest/img/images.jpeg'

class Users extends React.Component {
    constructor(props) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    /*props.setUsers(
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
            }]*/

    render() {
        return (

            < div> {
                this.props.users.map(u =>
                        <div key={u.id}>
                <span>
                    <div>
                        <img src={userPhoto} className={styles.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                            <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div> country </div>
                        <div> city </div>
                    </span>
                </span>
                        </div>
                )
            }
            </div>)
    }
}

export default Users;