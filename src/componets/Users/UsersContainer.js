import {connect} from "react-redux";
import Users from "./Users";
import React from 'react';
import {
    followe,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggelIsFetching,
    unfollowe
} from "../../redux/UsersReduser";
import * as axios from "axios";
import Preloder from "../common/Preloder/Preloder";

class UsersContainerApi extends React.Component {

    componentDidMount() {
        this.props.toggelIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {withCredentials: true})
            .then(response => {
                this.props.toggelIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onCurrentPage = (numberPage) => {
        this.props.toggelIsFetching(true)
        this.props.setCurrentPage(numberPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`,
            {withCredentials: true})
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.toggelIsFetching(false)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloder/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onCurrentPage={this.onCurrentPage}
                   users={this.props.users}
                   followe={this.props.followe}
                   unfollowe={this.props.unfollowe}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
/*let mapDispatchToProps = (dispatch) => {
    return {
        followe: (userId) => {
            dispatch(followerActionCreater(userId))
        },
        unfollowe: (userId) => {
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
        },
        toggelIsFetching: (isFetching) => {
            dispatch(toggelIsFechingActionCreater(isFetching))
        }
    }
}*/


const UsersContainer = connect(mapStateToProps,
    {
        followe,
        unfollowe,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggelIsFetching
    })
(UsersContainerApi)

export default UsersContainer;