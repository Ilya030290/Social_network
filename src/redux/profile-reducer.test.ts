import {addPost, deletePost, profileReducer} from "./profile-reducer";
import {PostType} from "../components/Profile/MyPosts/Post/Post";

let initialState = {
    posts: [
        {id: 1, message: 'My first post', likeCount: 13},
        {id: 2, message: 'I want to be a frontend developer', likeCount: 15}
    ] as Array<PostType>,
    profile: {
        aboutMe: 'I want tobe a frontend developer',
        contacts: {
            facebook: 'none',
            github: 'https://github.com/Ilya030290',
            instagram: 'https://instagram.com/',
            mainLink: 'none',
            vk: 'none',
            twitter: 'none',
            website: 'none',
            youtube: 'none'
        },
        fullName: 'Ilya Anoshko',
        lookingForAJob: true,
        lookingForAJobDescription: 'I look for a new job, help me please',
        photos: {
            large: null,
            small: null
        },
        userId: 230
    },
    status: "",
    isFetching: false
};

test('new post should be added', () => {

    let newState = profileReducer(initialState, addPost("New Post"));

    expect(newState.posts.length).toBe(3);
    expect(newState.posts[0].message).toBe("New Post");
    expect(newState.posts[0].likeCount).toBe(0);
});

test('correct post should be deleted', () => {
    let newState = profileReducer(initialState, deletePost(1));

    expect(newState.posts.length).toBe(1);
    expect(newState.posts[0].message).toBe("I want to be a frontend developer");
    expect(newState.posts[0].likeCount).toBe(15);
})