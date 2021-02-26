import { connect } from "react-redux";
import Users from "./Users";
import React from 'react';
import {
    follow,
    getUsersThunkCreater,
    unfollow
} from "../../redux/UsersReduser";
import Preloder from "../common/Preloder/Preloder";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowinInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/usersSelectors";
import {usersType} from "../../types/types";
import {appReduserType} from "../../redux/reduxStore";

type mapStateToPropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<usersType>
    followInProgress: Array<number>
}
type mapDispatchToPropsType = {
    follow:(userId: number) => void
    unfollow:(userId: number) => void
    getUsersThunkCreater: (currentPage: number, pageSize: number) => void
}
type owenPropsType = {
 setTitle: string
}
type propsType = mapDispatchToPropsType & mapStateToPropsType & owenPropsType


class UsersContainer extends React.Component<propsType> {

    componentDidMount() {
        const {currentPage, pageSize } = this.props
        this.props.getUsersThunkCreater(currentPage, pageSize);
    }

    onCurrentPage = (numberPage: number) => {
        const {pageSize} = this.props
        this.props.getUsersThunkCreater(numberPage, pageSize);
    }

    render() {
        return <>
            {this.props.setTitle}
            {this.props.isFetching ? <Preloder/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onCurrentPage={this.onCurrentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followInProgress={this.props.followInProgress}

            />
        </>
    }
}

let mapStateToProps = (state: appReduserType ): mapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followInProgress: getFollowinInProgress(state)
    }
}
/*let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress
    }
}*/
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
    connect<mapStateToPropsType, mapDispatchToPropsType, owenPropsType, appReduserType>(mapStateToProps,
        {
            follow,
            unfollow,
            getUsersThunkCreater
        }))(UsersContainer);