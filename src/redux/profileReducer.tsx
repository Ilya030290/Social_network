import {ActionsTypes} from "./state";
import {PostPropsType} from "../components/Profile/MyPosts/Post/Post";

type ProfileReducerState = {
        posts: Array<PostPropsType>
        newPostText: string
}

export const profileReducer = (state: ProfileReducerState, action: ActionsTypes) => {

    switch(action.type) {
        case 'ADD-POST':
            let newPost = {id: new Date().getTime(), message: state.newPostText, likeCount: 0};
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

