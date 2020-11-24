import {connect} from "react-redux";
import Users from "./Users";
import React from 'react';
import {
    followerActionCreater,
    setCurrentPageActionCreater, setTotalUsersCountActionCreater,
    setUsersActionCreater,
    unfollowerActionCreater
} from "../../redux/UsersReduser";
import * as axios from "axios";

class UsersContainerApi extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onCurrentPage = (numberPage) => {
        this.props.setCurrentPage(numberPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onCurrentPage={this.onCurrentPage}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followerActionCreater(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowerActionCreater(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreater(users))
        },
        setCurrentPage: (numberPage) => {
            dispatch(setCurrentPageActionCreater(numberPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountActionCreater(totalCount))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerApi)

export default UsersContainer;