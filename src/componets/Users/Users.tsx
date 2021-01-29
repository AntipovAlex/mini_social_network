import React, { FC } from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {usersType} from "../../types/types";

type propsType = {
    currentPage: number
    followInProgress: Array<number>
    totalUsersCount: number
    pageSize: number
    users: Array<usersType>
    onCurrentPage: (pageNumber: number) => void
    follow:(userId: number) => void
    unfollow:(userId: number) => void
}

const Users: FC<propsType> = ({currentPage, onCurrentPage, totalUsersCount, pageSize, users, ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage}
                       onCurrentPage={onCurrentPage}
                       totalItemCount={totalUsersCount}
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