import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/ProfileReduser";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {appReduserType} from "../../redux/reduxStore";
import {profileType, usersType} from "../../types/types";

type propsType = {
 userId: number
}
type stateType = {}

type mapStateToPropsType = {
    profile: profileType
    status: string | any
    loginUserId: number
    isAuth: boolean
}

type mapDispatchToPropsType = {
    getUserProfile: () => void
    getStatus: () => void
    updateStatus: (status: string) => void
    savePhoto: (file: any) => void
    saveProfile: (profile: profileType) => void
}
type owenPropsType ={}

class ProfileContainer extends Component <propsType, stateType> {

    refreshProfile() {
        // @ts-ignore
        let userId = this.props.match.params.userId;
        if (!userId) {
            // @ts-ignore
            userId = this.props.loginUserId;
            if (!userId) {
                // @ts-ignore
                this.props.history.push("/users")
            }
        }
        // @ts-ignore
        this.props.getUserProfile(userId);
        // @ts-ignore
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: propsType, prevState: stateType) {
        // @ts-ignore
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }

    }

    render() {
        return (
            // @ts-ignore
            <Profile {...this.props}
                // @ts-ignore
                     profile={this.props.profile}
                // @ts-ignore
                     status={this.props.status}
                // @ts-ignore
                     updateStatus={this.props.updateStatus}
                // @ts-ignore
                     isOwner={!this.props.match.params.userId}
                // @ts-ignore
                     savePhoto={this.props.savePhoto}/>
        )
    }
}

let mapStateToProps = (state: appReduserType): mapStateToPropsType => {
    return {
        // @ts-ignore
        profile: state.profilePage.profile,
        // @ts-ignore
        status: state.profilePage.status,
        // @ts-ignore
        loginUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect<mapStateToPropsType, mapDispatchToPropsType, owenPropsType, appReduserType>
        // @ts-ignore
    (mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter)
(ProfileContainer);
