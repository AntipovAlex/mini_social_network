import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/ProfileReduser";
import withRouter from "react-router-dom/es/withRouter";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile = {this.props.profile}/>
        )
    }
}

let mapStateToProps =(state) => ({
    profile: state.profilePage.profile
})

let WithRouterDataComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {getUserProfile}) (WithRouterDataComponent);