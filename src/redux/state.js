import {reRenderEntireThee} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, post: "Hi, I are you?", likeCount: "16"},
            {id: 2, post: "It`s my first post.", likeCount: "11"},
            {id: 3, post: "It`s very well.", likeCount: "21"},
            {id: 4, post: "Super.", likeCount: "6"},
        ],
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
        ]
    },
    siteBar: {}
}
export let addPost = (newMessanger) => {
    let newPost = {
        id: 5,
        post: newMessanger,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost);
    reRenderEntireThee(state);
};
export default state;