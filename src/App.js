import './App.css';
import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import Profile from "./componets/Profile/Profile";
import Dialogs from "./componets/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./componets/News/News";
import Music from "./componets/Music/Music";
import Settings from "./componets/Settings/Settings";


function App(props) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() =>
                        <Profile profilePage={props.state.profilePage}
                                 addPost={props.addPost}
                                 updeateNewPostText={props.updeateNewPostText}/>}/>
                    <Route path="/dialogs" render={() =>
                        <Dialogs dialogPage={props.state.dialogPage}
                                 addMessanger={props.addMessanger}
                                 updeateNewMessangerText={props.updeateNewPostText}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
