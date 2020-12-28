import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


const Users = ({currentPage, onCurrentPage, totalUsersCount, pageSize, users, ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage}
                       onCurrentPage={onCurrentPage}
                       totalUsersCount={totalUsersCount}
                       pageSize={pageSize}/>
            {users.map(u =>
                <User user={u}
                      followInProgress={props.followInProgress}
                      follow={props.follow}
                      unfollow={props.unfollow}
                      key={u.id}/>)
            }
        </div>
    )
}



export default Users;