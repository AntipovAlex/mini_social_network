import {reRenderEntireThee} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, post: "Hi, I are you?", likeCount: "16"},
            {id: 2, post: "It`s my first post.", likeCount: "11"},
            {id: 3, post: "It`s very well.", likeCount: "21"},
            {id: 4, post: "Super.", likeCount: "6"},
        ],
        newPostChange: " Hi, hi my freinds"
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
    siteBar: {}
}
/*window.state = state;*/
export let addPost = () => {
    let newPost = {
        id: 5,
        post: state.profilePage.newPostChange,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostChange = "";
    reRenderEntireThee(state);
};
export let addMessanger = () => {
    let newMassenger = {
        id: 4,
        messanger: state.dialogPage.newDialogText,
    }
    state.dialogPage.messangers.push(newMassenger);
    state.dialogPage.newDialogText = "";
    reRenderEntireThee(state);
}
export let updeateNewPostText = (newText) => {
    state.profilePage.newPostChange = newText;
    reRenderEntireThee(state);
}
export let updeateNewMessangerText = (newMassenger) => {
    state.dialogPage.newDialogText = newMassenger;
    reRenderEntireThee(state);
}


export default state;