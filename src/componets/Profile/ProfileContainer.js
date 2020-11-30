import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/ProfileReduser";
import withRouter from "react-router-dom/es/withRouter";
import {Redirect} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {

        if(!this.props.isAuth) return <Redirect to = {"/login"}/>

        return (
            <Profile {...this.props} profile = {this.props.profile}/>
        )
    }
}

let mapStateToProps =(state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

let WithRouterDataComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {getUserProfile}) (WithRouterDataComponent);