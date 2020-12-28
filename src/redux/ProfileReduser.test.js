import { render, screen } from '@testing-library/react';
import profileReduser, {AddPostActionCreater, deletePost} from "./ProfileReduser";


test('new post should be added ', () => {
    let state = {
        posts: [
            {id: 1, post: "Hi, I are you?", likeCount: "16"},
            {id: 2, post: "It`s my first post.", likeCount: "11"},
            {id: 3, post: "It`s very well.", likeCount: "21"},
            {id: 4, post: "Super.", likeCount: "6"},
        ]
    }
    let action = AddPostActionCreater("Test messanger");

    let newState = profileReduser(state, action);

    expect(newState.posts.length).toBe(5)

});

test('new post should be "Test messanger" ', () => {
    let state = {
        posts: [
            {id: 1, post: "Hi, I are you?", likeCount: "16"},
            {id: 2, post: "It`s my first post.", likeCount: "11"},
            {id: 3, post: "It`s very well.", likeCount: "21"},
            {id: 4, post: "Super.", likeCount: "6"},
        ]
    }
    let action = AddPostActionCreater("Test messanger");

    let newState = profileReduser(state, action);

    expect(newState.posts[4].post).toBe("Test messanger")

});

test('after delete post should be post decrement" ', () => {
    let state = {
        posts: [
            {id: 1, post: "Hi, I are you?", likeCount: "16"},
            {id: 2, post: "It`s my first post.", likeCount: "11"},
            {id: 3, post: "It`s very well.", likeCount: "21"},
            {id: 4, post: "Super.", likeCount: "6"},
        ]
    }
    let action = deletePost(1);

    let newState = profileReduser(state, action);

    expect(newState.posts.length).toBe(3)

});
