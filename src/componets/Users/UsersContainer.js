import {connect} from "react-redux";
import Users from "./Users";
import React from 'react';
import {
    follow, getUsersThunkCreater,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow
} from "../../redux/UsersReduser";
import Preloder from "../common/Preloder/Preloder";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreater(this.props.currentPage, this.props.pageSize);
    }

    onCurrentPage = (numberPage) => {
        this.props.getUsersThunkCreater(numberPage, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloder/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onCurrentPage={this.onCurrentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followInProgress={this.props.followInProgress}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}

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
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress
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

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,
    {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsersThunkCreater
    }))(UsersContainer);