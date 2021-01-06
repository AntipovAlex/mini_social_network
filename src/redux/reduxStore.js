import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReduser from "./ProfileReduser";
import dialogsReduser from "./DialogsReduser";
import siteBarReduser from "./SiteBarReduser";
import usersReduser from "./UsersReduser";
import authReduser from "./AuthReduser";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer } from "redux-form";
import appReduser from "./AppReduser";

let redusers = combineReducers({
    profilePage: profileReduser,
    dialogPage: dialogsReduser,
    siteBar: siteBarReduser,
    usersPage: usersReduser,
    auth: authReduser,
    form: formReducer,
    app: appReduser
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers, composeEnhancers(applyMiddleware(thunkMiddleware)));

/*let store = createStore(redusers, applyMiddleware(thunkMiddleware));*/
window.store = store;

export default store;