import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {sendMessageActionType, updateNewMessageBodyActionType} from "./dialogsReducer";
import {
    followActionType,
    setCurrentPageActionType,
    setTotalUsersCountActionType,
    setUsersActionType,
    unFollowActionType
} from "./usersReducer";

export type addPostActionType = {
    type: 'ADD-POST'
}

export type updateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type ActionsTypes = addPostActionType
    | updateNewPostTextActionType
    | updateNewMessageBodyActionType
    | sendMessageActionType
    | followActionType
    | unFollowActionType
    | setUsersActionType
    | setCurrentPageActionType
    | setTotalUsersCountActionType


export type ProfileReducerStateType = {
    posts: Array<PostType>
    newPostText: string
}

let initialState: ProfileReducerStateType = {
    posts: [
        {id: 1, message: 'My first post', likeCount: 13},
        {id: 2, message: 'I want to be a frontend developer', likeCount: 15}
    ] as Array<PostType>,
    newPostText: ''
}

export const profileReducer = (state: ProfileReducerStateType = initialState, action: ActionsTypes): ProfileReducerStateType => {

    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                newPostText: '',
                posts: [{id: new Date().getTime(), message: state.newPostText, likeCount: 0}, ...state.posts]
            };
        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText: action.newText};
        default:
            return state;
    }
}

export const addPostCreator = (): addPostActionType => ({type: 'ADD-POST'})

export const updateNewPostTextCreator = (text: string): updateNewPostTextActionType =>
    ({type: 'UPDATE-NEW-POST-TEXT', newText: text})