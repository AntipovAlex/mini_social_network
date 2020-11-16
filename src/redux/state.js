import profileReduser from "./ProfileReduser";
import dialogsReduser from "./DialogsReduser";
import siteBarReduser from "./SiteBarReduser";

let store = {
    _callSubscriber() {
    },
    getState() {
        return this._state
    },
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: "Hi, I are you?", likeCount: "16"},
                {id: 2, post: "It`s my first post.", likeCount: "11"},
                {id: 3, post: "It`s very well.", likeCount: "21"},
                {id: 4, post: "Super.", likeCount: "6"},
            ],
            newPostChange: "Hi, hi my freinds"
        },
        dialogPage: {
            messangers: [
                {id: 1, messanger: "Hi"},
                {id: 2, messanger: "How are you?"},
                {id: 3, messanger: "I fun"},
            ],
            dialogs: [
                {id: 1, name: "Sasha"},
                {id: 2, name: "Anna"},
                {id: 3, name: "Vetal"},
                {id: 4, name: "Lyda"},
                {id: 5, name: "Petro"},
                {id: 6, name: "Viktor"},
            ],
            newDialogText: "Hello? hello"
        },
        siteBar: {},
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.dialogPage = dialogsReduser(this._state.dialogPage, action);
        this._state.siteBar = siteBarReduser(this._state.siteBar, action);
        this._callSubscriber(this._state);
            }
}




window.store = store;
export default store;