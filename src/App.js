import './App.css';
import Navbar from "./componets/Navbar/Navbar";
import  {BrowserRouter ,withRouter, Route} from "react-router-dom";
import News from "./componets/News/News";
import Music from "./componets/Music/Music";
import Settings from "./componets/Settings/Settings";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";
import UsersContainer from "./componets/Users/UsersContainer";
import ProfileContainer from "./componets/Profile/ProfileContainer";
import HeaderContainer from "./componets/Header/HeaderContainer";
import Login from "./componets/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloder from "./componets/common/Preloder/Preloder";
import {initializedApp} from "./redux/AppReduser";


class App extends Component {

    componentDidMount() {
        this.props.initializedApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloder/>
        }

        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route path="/profile/:userId?" render={() =>
                            <ProfileContainer/>}/>
                        <Route path="/dialogs" render={() =>
                            <DialogsContainer/>}/>
                        <Route path="/users" render={() =>
                            <UsersContainer/>}/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>
                        <Route path="/login" component={Login}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializedApp}))
    (App);
