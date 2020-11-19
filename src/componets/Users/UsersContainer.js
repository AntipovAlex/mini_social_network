import {connect} from "react-redux";
import Users from "./Users";
import {followerActionCreater, setUsersActionCreater, unfollowerActionCreater} from "../../redux/UsersReduser";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        setUsers: (users) =>
            dispatch(setUsersActionCreater(users))
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;