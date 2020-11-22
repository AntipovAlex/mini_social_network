import {connect} from "react-redux";
import Users from "./Users";
import {
    followerActionCreater,
    setCurrentPageActionCreater, setTotalUsersCountActionCreater,
    setUsersActionCreater,
    unfollowerActionCreater
} from "../../redux/UsersReduser";


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


    const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

    export default UsersContainer;