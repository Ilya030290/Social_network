import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {SendMessageActionType, UpdateNewMessageBodyActionType} from "./dialogs-reducer";
import {UserProfileType} from "../components/Profile/ProfileContainer";
import {ProfileDataResponseType, usersAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";


export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type SetUserProfileActionType = {
    type: 'SET_USER_PROFILE'
    profile: UserProfileType
}

export type ActionsTypes = AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageBodyActionType
    | SendMessageActionType
    | SetUserProfileActionType


export type ProfileReducerStateType = {
    posts: Array<PostType>
    newPostText: string
    profile: UserProfileType | null
}

let initialState: ProfileReducerStateType = {
    posts: [
        {id: 1, message: 'My first post', likeCount: 13},
        {id: 2, message: 'I want to be a frontend developer', likeCount: 15}
    ] as Array<PostType>,
    newPostText: '',
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
        userId: 289
    }
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
        case "SET_USER_PROFILE":
            return {...state, profile: action.profile};
        default:
            return state;
    }
}

export const addPost = (): AddPostActionType => ({type: 'ADD-POST'})
export const updateNewPostText = (text: string): UpdateNewPostTextActionType => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
})
export const setUserProfile = (profile: UserProfileType): SetUserProfileActionType => ({
    type: 'SET_USER_PROFILE',
    profile: profile
})

//ThunkCreator

export type DispatchProfileType = ThunkDispatch<ProfileReducerStateType, unknown, ActionsTypes>;
export type ThunkProfileType = ThunkAction<void, ProfileReducerStateType, unknown, ActionsTypes>

export const getUserProfile = (userId: number | undefined): ThunkProfileType => {
    return (dispatch: DispatchProfileType ) => {
        usersAPI.getProfile(userId)
            .then((data: ProfileDataResponseType) => {
                dispatch(setUserProfile(data));
            });
    }
}