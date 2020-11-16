import {combineReducers, createStore} from "redux";
import profileReduser from "./ProfileReduser";
import dialogsReduser from "./DialogsReduser";
import siteBarReduser from "./SiteBarReduser";

let redusers = combineReducers({
    profilePage: profileReduser,
    dialogPage: dialogsReduser,
    siteBar: siteBarReduser
});
let store = createStore(redusers);

export default store;