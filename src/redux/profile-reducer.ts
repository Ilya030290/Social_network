import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {SendMessageActionType, UpdateNewMessageBodyActionType} from "./dialogs-reducer";
import {UserProfileType} from "../components/Profile/ProfileContainer";
import {profileAPI, ProfileDataResponseType} from "../api/api";
import {ThunkType} from "./redux-store";


export type AddPostActionType = {
    type: 'ADD-POST',
    newPostText: string
}

export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type SetUserProfileActionType = {
    type: 'SET_USER_PROFILE'
    profile: UserProfileType
}

export type SetStatusActionType = {
    type: "SET_STATUS"
    status: string
}

export type toggleIsFetchingActionType = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching: boolean
}

export type DialogsProfileReducersActionsTypes = AddPostActionType
    | UpdateNewMessageBodyActionType
    | SendMessageActionType
    | SetUserProfileActionType
    | SetStatusActionType
    | toggleIsFetchingActionType


export type ProfileReducerStateType = {
    posts: Array<PostType>
    profile: UserProfileType | null
    status: string
    isFetching: boolean
}

let initialState: ProfileReducerStateType = {
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
}

export const profileReducer = (state: ProfileReducerStateType = initialState, action: DialogsProfileReducersActionsTypes): ProfileReducerStateType => {

    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [{id: new Date().getTime(), message: action.newPostText, likeCount: 0}, ...state.posts]
            };
        case "SET_USER_PROFILE":
            return {...state, profile: action.profile};
        case "SET_STATUS":
            return {...state, status: action.status};
        case 'TOGGLE_IS_FETCHING':
            return {...state, isFetching: action.isFetching};
        default:
            return state;
    }
}

export const addPost = (newPostText: string): AddPostActionType => ({type: 'ADD-POST', newPostText});
export const setUserProfile = (profile: UserProfileType): SetUserProfileActionType => ({
    type: 'SET_USER_PROFILE',
    profile: profile
});
export const setStatus = (status: string): SetStatusActionType => ({type: "SET_STATUS", status});
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => ({
    type: 'TOGGLE_IS_FETCHING',
    isFetching: isFetching
});

//ThunkCreator

export const getUserProfile = (userId: number | undefined): ThunkType => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        profileAPI.getProfile(userId)
            .then((data: ProfileDataResponseType) => {
                dispatch(setUserProfile(data));
                dispatch(toggleIsFetching(false));
            });
    }
}

export const getUserStatus = (userId: number | undefined): ThunkType => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        profileAPI.getStatus(userId)
            .then((response) => {
                if (response.data) {
                    dispatch(setStatus(response.data));
                } else {
                    dispatch(setStatus('Null'));
                    dispatch(toggleIsFetching(false));
                }
            });
    }
}

export const updateUserStatus = (status: string): ThunkType => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then((response) => {
                if (response.data.resultCode == 0) {
                    dispatch(setStatus(status));
                }
            });
    }
}