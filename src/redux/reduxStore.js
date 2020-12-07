import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReduser from "./ProfileReduser";
import dialogsReduser from "./DialogsReduser";
import siteBarReduser from "./SiteBarReduser";
import usersReduser from "./UsersReduser";
import authReduser from "./AuthReduser";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer } from "redux-form";

let redusers = combineReducers({
    profilePage: profileReduser,
    dialogPage: dialogsReduser,
    siteBar: siteBarReduser,
    usersPage: usersReduser,
    auth: authReduser,
    form: formReducer
});
let store = createStore(redusers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;